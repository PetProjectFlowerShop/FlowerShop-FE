import { z } from 'zod';

export const customerDetailsSchema = z
  .object({
    recipient: z.enum(['me', 'another']),
    fullName: z.string().trim().min(2, 'Enter your full name'),
    email: z
      .string()
      .trim()
      .refine(
        (value) => value === '' || z.email().safeParse(value).success,
        'Enter a valid e-mail address'
      ),
    phone: z
      .string()
      .trim()
      .min(10, 'Enter a valid phone, for example, +380...')
      .regex(/^\+?\d+$/, 'Only numbers and the + sign are allowed, for example, +380...'),

    recipientName: z.string(),
    recipientPhone: z.string(),

    dontCallToConfirm: z.boolean(),
    addGreetingCard: z.boolean(),
    greetingMessage: z.string().max(300, 'Maximum 300 characters'),
  })
  .superRefine((data, ctx) => {
    if (data.recipient === 'another') {
      if (!data.recipientName.trim()) {
        ctx.addIssue({
          code: 'custom',
          path: ['recipientName'],
          message: "Enter the recipient's name",
        });
      }

      const phone = data.recipientPhone.trim();

      if (phone.length < 10) {
        ctx.addIssue({
          code: 'custom',
          path: ['recipientPhone'],
          message: 'Enter a valid phone, for example, +380...',
        });
      } else if (!/^\+?\d+$/.test(phone)) {
        ctx.addIssue({
          code: 'custom',
          path: ['recipientPhone'],
          message: 'Only numbers and the + sign are allowed',
        });
      }
    }
  });

export type CustomerDetailsFormValues = z.infer<typeof customerDetailsSchema>;

export const customerDetailsDefaultValues: CustomerDetailsFormValues = {
  recipient: 'me',
  fullName: '',
  email: '',
  phone: '',
  recipientName: '',
  recipientPhone: '',
  dontCallToConfirm: false,
  addGreetingCard: false,
  greetingMessage: '',
};
