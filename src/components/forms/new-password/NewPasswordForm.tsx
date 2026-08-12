import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Stack, Button } from '@mui/material';
import { AuthFormLayout } from '../components/AuthFormLayout';
import { FormHeader } from '../components/FormHeader';

type NewPasswordFormValues = {
  password: string;
  confirmPassword: string;
};

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
      onSuccess={handleSubmit}
      FormProps={{
        style: {
          width: '100%',
        },
      }}
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

        <Button variant="contained" type="submit">
          Save and Log in
        </Button>
      </AuthFormLayout>
    </FormContainer>
  );
}
