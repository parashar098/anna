'use server';
/**
 * @fileOverview An intelligent support AI agent that provides contextual support through the contact form.
 *
 * - intelligentSupport - A function that handles the intelligent support process.
 * - IntelligentSupportInput - The input type for the intelligentSupport function.
 * - IntelligentSupportOutput - The return type for the intelligentSupport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentSupportInputSchema = z.object({
  name: z.string().describe('The name of the user.'),
  email: z.string().email().describe('The email address of the user.'),
  message: z.string().describe('The message from the user.'),
});
export type IntelligentSupportInput = z.infer<typeof IntelligentSupportInputSchema>;

const IntelligentSupportOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the user message.'),
});
export type IntelligentSupportOutput = z.infer<typeof IntelligentSupportOutputSchema>;

export async function intelligentSupport(input: IntelligentSupportInput): Promise<IntelligentSupportOutput> {
  return intelligentSupportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentSupportPrompt',
  input: {schema: IntelligentSupportInputSchema},
  output: {schema: IntelligentSupportOutputSchema},
  prompt: `You are a customer service representative for AnnaSewa, a food redistribution platform.

  Use the following information to provide a helpful and informative response to the user's message.

  User Name: {{{name}}}
  User Email: {{{email}}}
  User Message: {{{message}}}

  Respond in a friendly and helpful manner, using your knowledge of the AnnaSewa platform to provide the best possible support.
  Be concise in your answers and do not write more than 3 sentences. Be very polite, thank the user for contacting us, and offer additional assistance should it be needed.
  `,
});

const intelligentSupportFlow = ai.defineFlow(
  {
    name: 'intelligentSupportFlow',
    inputSchema: IntelligentSupportInputSchema,
    outputSchema: IntelligentSupportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
