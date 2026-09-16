import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Stack } from '@mui/material';
import { AuthFormLayout } from '../components/AuthFormLayout';
import { FormHeader } from '../components/FormHeader';
import { SubmitButton } from '../SubmitButton';

import { zodResolver } from '@hookform/resolvers/zod';
import { newPasswordSchema, type NewPasswordFormValues } from '@/validation/newPasswordSchema';

export function NewPasswordForm() {
  const defaultValues: NewPasswordFormValues = {
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (data: NewPasswordFormValues) => {
    console.log(data);
  };

  return (
    <FormContainer
      defaultValues={defaultValues}
      resolver={zodResolver(newPasswordSchema)}
      onSuccess={handleSubmit}
    >
      <AuthFormLayout>
        <FormHeader title="New password" subtitle="Enter and confirm your new password below." />
        <Stack
          spacing={{
            xs: 2,
            sm: 4,
          }}
        >
          <TextFieldElement
            name="password"
            label="New password"
            placeholder="Enter your new password"
            type="password"
          />

          <TextFieldElement
            name="confirmPassword"
            label="Confirm new password"
            placeholder="Confirm new password"
            type="password"
          />
        </Stack>

        <SubmitButton>Save and Log in</SubmitButton>
      </AuthFormLayout>
    </FormContainer>
  );
}
