import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z.string().min(1, 'Enter your email').email('Enter a valid email address'),

    password: z.string().min(8, 'Password must contain at least 8 characters'),

    confirmPassword: z.string().min(1, 'Confirm your password'),

    privacyPolicy: z.boolean().refine((value) => value === true, {
      message: 'Please accept the Terms of Service and Privacy Policy to continue.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
