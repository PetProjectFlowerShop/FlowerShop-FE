import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { useDrawer } from '@/hooks/useDrawer.ts';
import { Button } from '@mui/material';
import { AuthFormLayout } from '../components/AuthFormLayout';
import { FormHeader } from '../components/FormHeader';

type PasswordRecoveryFormValues = {
  email: string;
};

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
    <FormContainer defaultValues={defaultValues} onSuccess={handleSubmit}>
      <AuthFormLayout>
        <FormHeader
          title="Password recovery"
          subtitle="Enter your email address to receive a password reset link."
        />
        <TextFieldElement name="email" label="Email" placeholder="Enter your email" />

        <Button variant="contained" type="submit">
          Send a link
        </Button>
      </AuthFormLayout>
    </FormContainer>
  );
}
