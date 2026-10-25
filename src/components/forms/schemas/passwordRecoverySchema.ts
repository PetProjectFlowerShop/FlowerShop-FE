import { z } from 'zod';

export const passwordRecoverySchema = z.object({
  email: z.string().min(1, 'Enter your email').email('Enter a valid email address'),
});

export type PasswordRecoveryFormValues = z.infer<typeof passwordRecoverySchema>;
