import { z } from 'zod';

export const deliveryTimeSlots = [
  'Select time',
  '9:00-11:00',
  '11:00-13:00',
  '14:00-16:00',
  '16:00-18:00',
  '18:00-20:00',
] as const;

export const deliverySchema = z
  .object({
    deliveryMethod: z.enum(['courier', 'pickup']),

    city: z.string(),
    street: z.string(),
    building: z.string(),
    entrance: z.string(),
    apartment: z.string(),

    orderDate: z
      .string()
      .min(1, 'Select an order date')
      .refine((value) => {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

        if (!match) return false;

        const [, year, month, day] = match.map(Number);

        const date = new Date(year, month - 1, day);

        return (
          date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
        );
      }, 'Enter a valid date'),

    orderTime: z.enum(deliveryTimeSlots).refine((value) => value !== 'Select time', {
      message: 'Select an order time',
    }),

    orderComment: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.deliveryMethod === 'courier') {
      const requiredFields = [
        ['city', 'Select a city'],
        ['street', 'Select a street'],
        ['building', 'Enter building number'],
      ] as const;

      requiredFields.forEach(([field, message]) => {
        if (!data[field].trim()) {
          ctx.addIssue({
            code: 'custom',
            path: [field],
            message,
          });
        }
      });
    }
  });

export type DeliveryFormValues = z.input<typeof deliverySchema>;
export type ValidDeliveryFormValues = z.output<typeof deliverySchema>;

export const deliveryDefaultValues: DeliveryFormValues = {
  deliveryMethod: 'courier',
  city: '',
  street: '',
  building: '',
  entrance: '',
  apartment: '',
  orderDate: '',
  orderTime: 'Select time',
  orderComment: '',
};
