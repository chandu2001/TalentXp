'use server';
/**
 * @fileOverview A Genkit flow for generating video from a text prompt.
 *
 * This flow uses the Veo 2 model to create a short video clip based on user input.
 */

import { ai } from '@/ai/genkit';
import { googleAI } from '@genkit-ai/googleai';
import { z } from 'genkit';
import { MediaPart } from 'genkit';

const VideoGenerationInputSchema = z.object({
  prompt: z.string().describe('The text prompt to generate a video from.'),
});
export type VideoGenerationInput = z.infer<typeof VideoGenerationInputSchema>;

const VideoGenerationOutputSchema = z.object({
  videoDataUri: z
    .string()
    .describe(
      "The generated video, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:video/mp4;base64,<encoded_data>'."
    ),
});
export type VideoGenerationOutput = z.infer<typeof VideoGenerationOutputSchema>;

export async function generateVideoFromPrompt(input: VideoGenerationInput): Promise<VideoGenerationOutput> {
  return generateVideoFlow(input);
}

const generateVideoFlow = ai.defineFlow(
  {
    name: 'generateVideoFlow',
    inputSchema: VideoGenerationInputSchema,
    outputSchema: VideoGenerationOutputSchema,
  },
  async ({ prompt }) => {
    let { operation } = await ai.generate({
      model: googleAI.model('veo-2.0-generate-001'),
      prompt: prompt,
      config: {
        durationSeconds: 5,
        aspectRatio: '16:9',
      },
    });

    if (!operation) {
      throw new Error('Expected the model to return an operation');
    }

    // Wait until the operation completes.
    while (!operation.done) {
      operation = await ai.checkOperation(operation);
      // Sleep for 5 seconds before checking again.
      await new Promise(resolve => setTimeout(resolve, 5000));
    }

    if (operation.error) {
      throw new Error(`Failed to generate video: ${operation.error.message}`);
    }

    const videoPart = operation.output?.message?.content.find(p => !!p.media);
    if (!videoPart?.media?.url) {
      throw new Error('Failed to find the generated video in the operation output.');
    }

    const videoDataUri = await fetchAndEncodeVideo(videoPart.media);

    return { videoDataUri };
  }
);

async function fetchAndEncodeVideo(mediaPart: MediaPart['media']): Promise<string> {
  const fetch = (await import('node-fetch')).default;

  const videoUrl = `${mediaPart!.url}&key=${process.env.GEMINI_API_KEY}`;
  const response = await fetch(videoUrl);

  if (!response.ok || !response.body) {
    throw new Error(`Failed to fetch video. Status: ${response.status}`);
  }

  const videoBuffer = await response.buffer();
  const base64Video = videoBuffer.toString('base64');
  const contentType = mediaPart!.contentType || 'video/mp4';
  
  return `data:${contentType};base64,${base64Video}`;
}
