'use server';

import { z } from 'zod';
import { intelligentSupport } from '@/ai/flows/intelligent-support';

const schema = z.object({
  name: z.string({ required_error: 'Name is required.' }).min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string({ required_error: 'Email is required.' }).email({ message: 'Please enter a valid email address.' }),
  message: z.string({ required_error: 'Message is required.' }).min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  aiResponse?: string;
};

export async function handleContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: 'Invalid form data. Please check the fields below.',
      issues,
      fields: {
        name: formData.get('name')?.toString() ?? '',
        email: formData.get('email')?.toString() ?? '',
        message: formData.get('message')?.toString() ?? '',
      },
    };
  }

  try {
    const result = await intelligentSupport(validatedFields.data);
    return {
      message: 'Success!',
      aiResponse: result.response,
    };
  } catch (e) {
    console.error(e);
    return {
      message: 'An error occurred while processing your request. Please try again later.',
    };
  }
}
