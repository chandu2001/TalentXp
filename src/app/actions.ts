'use server';

import { summarizeCaseStudy } from '@/ai/flows/ai-summarize-case-studies';
import { generateCareersContent, type GenerateCareersContentInput } from '@/ai/flows/ai-careers-content-generation';

export async function getCaseStudySummary(caseStudyText: string) {
  try {
    const result = await summarizeCaseStudy({ caseStudyText });
    return result.summary;
  } catch (error) {
    console.error('Error generating case study summary:', error);
    return 'Error: Could not generate summary.';
  }
}

export async function getCareersContent(input: GenerateCareersContentInput) {
    try {
        const result = await generateCareersContent(input);
        return result;
    } catch (error) {
        console.error('Error generating careers content:', error);
        return {
            jobDescription: 'Error: Could not generate job description.',
            employeeStory: 'Error: Could not generate employee story.',
            companyCultureHighlights: 'Error: Could not generate company culture highlights.'
        };
    }
}
