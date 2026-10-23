import { z } from 'zod';

export const paymentSchema = z
  .object({
    paymentMethod: z.enum(['googlePay', 'applePay', 'cash', 'card', '']),
    cardNumber: z.string(),
    expiryDate: z.string(),
    cvv: z.string(),
  })
  .superRefine((data, ctx) => {
    if (!data.paymentMethod) {
      ctx.addIssue({
        code: 'custom',
        path: ['paymentMethod'],
        message: 'Select a payment method',
      });
    }

    if (data.paymentMethod === 'card') {
      const cardNumber = data.cardNumber.replace(/\s/g, '');

      if (!/^\d{13,19}$/.test(cardNumber)) {
        ctx.addIssue({
          code: 'custom',
          path: ['cardNumber'],
          message: 'Enter a valid card number',
        });
      }

      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(data.expiryDate)) {
        ctx.addIssue({
          code: 'custom',
          path: ['expiryDate'],
          message: 'Enter expiry date in MM/YY format',
        });
      }

      if (!/^\d{3,4}$/.test(data.cvv)) {
        ctx.addIssue({
          code: 'custom',
          path: ['cvv'],
          message: 'Enter a valid CVV',
        });
      }
    }
  });

export type PaymentFormValues = z.infer<typeof paymentSchema>;

export const paymentDefaultValues: PaymentFormValues = {
  paymentMethod: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
};
