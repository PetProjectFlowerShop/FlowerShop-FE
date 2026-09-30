import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { useDrawer } from '@/hooks/useDrawer.ts';
import { AuthFormLayout } from '../components/AuthFormLayout';
import { FormHeader } from '../components/FormHeader';
import { SubmitButton } from '../SubmitButton';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  passwordRecoverySchema,
  type PasswordRecoveryFormValues,
} from '@/validation/passwordRecoverySchema';

export function PasswordRecoveryForm() {
  const defaultValues: PasswordRecoveryFormValues = {
    email: '',
  };

  const { toggleDrawer } = useDrawer();

  const handleSubmit = (data: PasswordRecoveryFormValues) => {
    console.log(data);
    toggleDrawer('check-email', true)();
  };

  return (
    <FormContainer
      defaultValues={defaultValues}
      resolver={zodResolver(passwordRecoverySchema)}
      onSuccess={handleSubmit}
    >
      <AuthFormLayout>
        <FormHeader
          title="Password recovery"
          subtitle="Enter your email address to receive a password reset link."
        />
        <TextFieldElement name="email" label="Email" placeholder="Enter your email" />

        <SubmitButton>Send a link</SubmitButton>
      </AuthFormLayout>
    </FormContainer>
  );
}
