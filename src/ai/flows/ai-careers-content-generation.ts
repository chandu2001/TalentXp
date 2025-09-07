// src/ai/flows/ai-careers-content-generation.ts
'use server';
/**
 * @fileOverview Generates engaging content for the Careers page, including job descriptions, employee stories, and company culture highlights.
 *
 * - generateCareersContent - A function that generates content for the careers page.
 * - GenerateCareersContentInput - The input type for the generateCareersContent function.
 * - GenerateCareersContentOutput - The return type for the generateCareersContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCareersContentInputSchema = z.object({
  jobTitle: z.string().describe('The title of the job.'),
  companyCulture: z.string().describe('Description of the company culture.'),
  employeeStoryIdea: z.string().describe('Idea for an employee story.'),
});
export type GenerateCareersContentInput = z.infer<typeof GenerateCareersContentInputSchema>;

const GenerateCareersContentOutputSchema = z.object({
  jobDescription: z.string().describe('The generated job description.'),
  employeeStory: z.string().describe('The generated employee story.'),
  companyCultureHighlights: z.string().describe('The generated company culture highlights.'),
});
export type GenerateCareersContentOutput = z.infer<typeof GenerateCareersContentOutputSchema>;

export async function generateCareersContent(input: GenerateCareersContentInput): Promise<GenerateCareersContentOutput> {
  return generateCareersContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCareersContentPrompt',
  input: {schema: GenerateCareersContentInputSchema},
  output: {schema: GenerateCareersContentOutputSchema},
  prompt: `You are an expert content creator for company careers pages.

  Using the provided information, generate a job description, an employee story, and company culture highlights.  Make the content engaging and relevant to attract top AI/ML talent.

  Job Title: {{{jobTitle}}}
  Company Culture: {{{companyCulture}}}
  Employee Story Idea: {{{employeeStoryIdea}}}
  `,
});

const generateCareersContentFlow = ai.defineFlow(
  {
    name: 'generateCareersContentFlow',
    inputSchema: GenerateCareersContentInputSchema,
    outputSchema: GenerateCareersContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
