// 'use server';

/**
 * @fileOverview A Genkit flow for summarizing case studies using AI.
 *
 * This flow takes a case study text as input and returns a concise summary highlighting key achievements and benefits.
 *
 * @file
 * - summarizeCaseStudy - A function that takes a case study text and returns a short, AI-generated summary.
 * - SummarizeCaseStudyInput - The input type for the summarizeCaseStudy function.
 * - SummarizeCaseStudyOutput - The return type for the summarizeCaseStudy function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';


const SummarizeCaseStudyInputSchema = z.object({
  caseStudyText: z.string().describe('The text content of the case study to summarize.'),
});

export type SummarizeCaseStudyInput = z.infer<typeof SummarizeCaseStudyInputSchema>;

const SummarizeCaseStudyOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the case study highlighting key achievements and benefits.'),
});

export type SummarizeCaseStudyOutput = z.infer<typeof SummarizeCaseStudyOutputSchema>;

export async function summarizeCaseStudy(input: SummarizeCaseStudyInput): Promise<SummarizeCaseStudyOutput> {
  return summarizeCaseStudyFlow(input);
}

const summarizeCaseStudyPrompt = ai.definePrompt({
  name: 'summarizeCaseStudyPrompt',
  input: {schema: SummarizeCaseStudyInputSchema},
  output: {schema: SummarizeCaseStudyOutputSchema},
  prompt: `You are an expert marketing assistant tasked with creating a short, engaging summary of a client case study.

  Given the following case study text, create a one-sentence summary that highlights the key achievements and benefits for prospective clients to quickly understand the value TalentXp provides.

  Case Study Text:
  {{caseStudyText}}`,
});

const summarizeCaseStudyFlow = ai.defineFlow(
  {
    name: 'summarizeCaseStudyFlow',
    inputSchema: SummarizeCaseStudyInputSchema,
    outputSchema: SummarizeCaseStudyOutputSchema,
  },
  async input => {
    const {output} = await summarizeCaseStudyPrompt(input);
    return output!;
  }
);
