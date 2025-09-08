'use server';

import { summarizeCaseStudy, type SummarizeCaseStudyInput } from '@/ai/flows/ai-summarize-case-studies';
import { chat as performChat, type ChatInput } from '@/ai/flows/ai-chatbot';

export const getCaseStudySummary = async (input: SummarizeCaseStudyInput) => {
  const { summary } = await summarizeCaseStudy(input);
  return summary;
};

export const getChatbotResponse = async (input: ChatInput) => {
  return await performChat(input);
};
