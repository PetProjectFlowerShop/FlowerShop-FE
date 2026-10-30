import { useEffect } from 'react';
import { Box, Button } from '@mui/material';

import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { DeliveryFields } from './DeliveryFields';

import {
  deliverySchema,
  deliveryDefaultValues,
  type DeliveryFormValues,
  type ValidDeliveryFormValues,
} from '../schemas/deliverySchema';

import { useCheckoutStore } from '@/store/checkout.store';

export function DeliveryForm() {
  const deliveryDetails = useCheckoutStore((state) => state.deliveryDetails);
  const saveDeliveryDetails = useCheckoutStore((state) => state.saveDeliveryDetails);
  const setActiveStep = useCheckoutStore((state) => state.setActiveStep);

  const methods = useForm<DeliveryFormValues, unknown, ValidDeliveryFormValues>({
    resolver: zodResolver(deliverySchema),
    defaultValues: deliveryDetails ?? deliveryDefaultValues,
    mode: 'onChange',
  });

  const handleValidSubmit = (data: ValidDeliveryFormValues) => {
    saveDeliveryDetails(data);
    setActiveStep(3);
  };

  const { reset } = methods;

  useEffect(() => {
    if (deliveryDetails) {
      reset(deliveryDetails);
    }
  }, [deliveryDetails, reset]);

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(handleValidSubmit)} noValidate>
        <DeliveryFields />

        <Button type="submit" variant="contained" color="secondary" sx={{ width: 300, mt: 8 }}>
          Go to payment
        </Button>
      </Box>
    </FormProvider>
  );
}
