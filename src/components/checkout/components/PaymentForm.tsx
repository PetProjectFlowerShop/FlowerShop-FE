import { useEffect } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { Controller, FormProvider, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextFieldElement } from 'react-hook-form-mui';

import googlePayIcon from '@/assets/icons/google.svg';
import AppleIcon from '@mui/icons-material/Apple';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import {
  paymentDefaultValues,
  paymentSchema,
  type PaymentFormValues,
} from '../schemas/paymentSchema';

import { useCheckoutStore } from '@/store/checkout.store';

interface PaymentFormProps {
  onPaymentValid: (data: PaymentFormValues) => void;
  onValidityChange: (isValid: boolean) => void;
}

const paymentOptions = [
  {
    value: 'googlePay',
    title: 'GooglePay',
    description: 'Fast and secure one-click payment',
    logo: googlePayIcon,
    isImage: true,
  },
  {
    value: 'applePay',
    title: 'ApplePay',
    description: 'Pay easily with Touch ID or Face ID',
    logo: AppleIcon,
    isImage: false,
  },
  {
    value: 'cash',
    title: 'Cash',
    description: 'Pay with cash upon receiving',
    logo: AttachMoneyIcon,
    isImage: false,
  },
  {
    value: 'card',
    title: 'Card',
    description: 'Secure payment via Visa or Mastercard',
    logo: CreditCardIcon,
    isImage: false,
  },
] as const;

export function PaymentForm({ onPaymentValid, onValidityChange }: PaymentFormProps) {
  const savePaymentMethod = useCheckoutStore((state) => state.savePaymentMethod);
  const paymentDetails = useCheckoutStore((state) => state.paymentDetails);

  const methods = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      ...paymentDefaultValues,
      paymentMethod: paymentDetails?.paymentMethod ?? paymentDefaultValues.paymentMethod,
    },
    mode: 'onChange',
  });

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const paymentMethod = useWatch({
    control,
    name: 'paymentMethod',
  });

  useEffect(() => {
    onValidityChange(isValid);
  }, [isValid, onValidityChange]);

  const onValid = (data: PaymentFormValues) => {
    onPaymentValid(data);
  };

  const handlePaymentMethodChange = (
    value: PaymentFormValues['paymentMethod'],
    onChange: (value: PaymentFormValues['paymentMethod']) => void
  ) => {
    onChange(value);

    if (!value) return;

    savePaymentMethod(value);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" id="payment-form" onSubmit={handleSubmit(onValid)} noValidate>
        <Stack spacing={3} mt={6}>
          <FormControl error={!!errors.paymentMethod}>
            <Controller
              name="paymentMethod"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  value={field.value}
                  onChange={(event) =>
                    handlePaymentMethodChange(
                      event.target.value as PaymentFormValues['paymentMethod'],
                      field.onChange
                    )
                  }
                >
                  {paymentOptions.map((option) => {
                    const Logo = option.logo;

                    return (
                      <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        sx={{
                          m: 0,
                          mb: 6,
                          width: '100%',
                          alignItems: 'center',
                          '& .MuiFormControlLabel-label': {
                            width: '100%',
                          },
                        }}
                        label={
                          <Stack direction="row" alignItems="center" spacing={1} width="100%">
                            {option.isImage ? (
                              <Box
                                component="img"
                                src={option.logo}
                                alt=""
                                sx={{
                                  width: 24,
                                  height: 24,
                                  objectFit: 'contain',
                                }}
                              />
                            ) : (
                              <Logo
                                sx={{
                                  width: 24,
                                  height: 24,
                                  fontSize: 24,
                                  color: 'text.primary',
                                }}
                              />
                            )}

                            <Stack spacing={1}>
                              <Typography variant="body">{option.title}</Typography>
                              <Typography variant="caption" color="text.secondary">
                                {option.description}
                              </Typography>
                            </Stack>
                          </Stack>
                        }
                      />
                    );
                  })}
                </RadioGroup>
              )}
            />

            {errors.paymentMethod && (
              <FormHelperText>{errors.paymentMethod.message}</FormHelperText>
            )}
          </FormControl>

          {paymentMethod === 'card' && (
            <Stack spacing={5}>
              <TextFieldElement
                name="cardNumber"
                label="Card Number"
                placeholder="1234 5678 9012 3456"
                fullWidth
                onChange={(event) => {
                  const digits = event.target.value.replace(/\D/g, '').slice(0, 16);

                  const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');

                  setValue('cardNumber', formatted, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
                slotProps={{
                  htmlInput: {
                    inputMode: 'numeric',
                    autoComplete: 'cc-number',
                  },
                }}
              />

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={5}>
                <TextFieldElement
                  name="expiryDate"
                  label="Expiry Date"
                  placeholder="MM/YY"
                  fullWidth
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'cc-exp',
                      maxLength: 5,
                    },
                  }}
                />

                <TextFieldElement
                  name="cvv"
                  label="CVV"
                  placeholder="123"
                  fullWidth
                  slotProps={{
                    htmlInput: {
                      type: 'password',
                      inputMode: 'numeric',
                      maxLength: 4,
                    },
                  }}
                />
              </Stack>
            </Stack>
          )}
        </Stack>
      </Box>
    </FormProvider>
  );
}
