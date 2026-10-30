import { useEffect } from 'react';
import { useForm, FormProvider, useFormContext, useWatch, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui';

import {
  customerDetailsSchema,
  customerDetailsDefaultValues,
  type CustomerDetailsFormValues,
} from '../schemas/customerDetailsSchema';

import { useCheckoutStore } from '@/store/checkout.store';

export function CustomerDetailsForm() {
  const saveCustomerDetails = useCheckoutStore((state) => state.saveCustomerDetails);

  const setActiveStep = useCheckoutStore((state) => state.setActiveStep);

  const customerDetails = useCheckoutStore((state) => state.customerDetails);

  const methods = useForm<CustomerDetailsFormValues>({
    resolver: zodResolver(customerDetailsSchema),
    defaultValues: customerDetails ?? customerDetailsDefaultValues,
    mode: 'onChange',
  });

  const { reset } = methods;

  useEffect(() => {
    if (customerDetails) {
      reset(customerDetails);
    }
  }, [customerDetails, reset]);

  const {
    formState: { isValid, isSubmitted },
  } = methods;

  const handleValidSubmit = (data: CustomerDetailsFormValues) => {
    saveCustomerDetails(data);
    setActiveStep(2);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(handleValidSubmit)} noValidate>
        <CustomerDetailsFields />
        {isSubmitted && !isValid && (
          <Typography variant="caption" color="error" sx={{ display: 'block', mt: 6 }}>
            Please access all statements to continue
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ width: 300, mt: 8, mb: 2 }}
        >
          Go to delivery
        </Button>
      </Box>
    </FormProvider>
  );
}

function CustomerDetailsFields() {
  const { control } = useFormContext<CustomerDetailsFormValues>();

  const recipient = useWatch({
    control,
    name: 'recipient',
  });

  const addGreetingCard = useWatch({
    control,
    name: 'addGreetingCard',
  });

  const greetingMessage = useWatch({
    control,
    name: 'greetingMessage',
  });

  return (
    <Stack spacing={6}>
      <FormControl>
        <Typography component="div" fontWeight={600} sx={{ mt: 6, mb: 3 }}>
          Recipient *
        </Typography>

        <Controller
          name="recipient"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <RadioGroup
                row
                value={field.value}
                onChange={(_, value) => field.onChange(value)}
                sx={{ gap: 5 }}
              >
                {[
                  { value: 'me', label: 'Me' },
                  {
                    value: 'another',
                    label: 'Another person',
                  },
                ].map((option) => {
                  const selected = field.value === option.value;

                  return (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio sx={{ display: 'none' }} />}
                      label={option.label}
                      sx={{
                        m: 0,
                        border: selected ? '2px solid' : '1px solid',
                        borderColor: selected ? 'primary.main' : 'divider',
                        borderRadius: 4,
                        px: 2.5,
                        py: 2,
                        bgcolor: selected ? '#dadecd' : 'background.paper', // 'action.selected'
                        '& .MuiFormControlLabel-label': {
                          width: '100%',
                          textAlign: 'center',
                          alignItems: 'center',
                        },
                      }}
                    />
                  );
                })}
              </RadioGroup>

              {fieldState.error && (
                <FormHelperText error>{fieldState.error.message}</FormHelperText>
              )}
            </>
          )}
        />
      </FormControl>

      <Stack spacing={5}>
        <TextFieldElement
          name="fullName"
          label="Full name"
          placeholder="Enter your full name"
          required
          fullWidth
        />

        <TextFieldElement
          name="email"
          label="E-mail"
          placeholder="Enter your e-mail"
          type="email"
          required
          fullWidth
        />

        <TextFieldElement
          name="phone"
          label="Your phone"
          placeholder="+380..."
          required
          fullWidth
        />

        <CheckboxElementAdapter
          name="dontCallToConfirm"
          label="Don't call me to confirm the order"
        />

        {recipient === 'another' && (
          <Stack spacing={5}>
            <TextFieldElement
              name="recipientName"
              label="Recipient's Name"
              placeholder="Enter recipient's name"
              required
              fullWidth
            />

            <TextFieldElement
              name="recipientPhone"
              label="Recipient's Phone"
              placeholder="Enter recipient's phone"
              required
              fullWidth
            />
          </Stack>
        )}
      </Stack>

      <Stack spacing={1}>
        <CheckboxElementAdapter
          name="addGreetingCard"
          label="Add a free greeting card with a personal message"
        />

        {addGreetingCard && (
          <Stack spacing={1} sx={{ mt: 1 }}>
            <Typography>Your greeting card</Typography>

            <TextFieldElement
              name="greetingMessage"
              placeholder="Write your personal message"
              multiline
              minRows={2}
              fullWidth
              inputProps={{ maxLength: 300 }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
              <Typography variant="caption" color="text.secondary" sx={{ marginLeft: 4 }}>
                Up to 300 characters
              </Typography>

              <Typography variant="caption" color="text.secondary" sx={{ marginRight: 4 }}>
                {greetingMessage.length}/300 characters
              </Typography>
            </Box>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

function CheckboxElementAdapter({
  name,
  label,
}: {
  name: 'dontCallToConfirm' | 'addGreetingCard';
  label: string;
}) {
  const { control } = useFormContext<CustomerDetailsFormValues>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Checkbox checked={field.value} onChange={(_, checked) => field.onChange(checked)} />
          }
          label={label}
          sx={{ alignItems: 'center', m: 0 }}
        />
      )}
    />
  );
}
