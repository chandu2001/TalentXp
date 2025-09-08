'use server';

import { summarizeCaseStudy, type SummarizeCaseStudyInput } from '@/ai/flows/ai-summarize-case-studies';

export const getCaseStudySummary = async (input: SummarizeCaseStudyInput) => {
  const { summary } = await summarizeCaseStudy(input);
  return summary;
};
