import { FormContainer, TextFieldElement, CheckboxElement } from 'react-hook-form-mui';
import { useDrawer } from '@/hooks/useDrawer.ts';
import { Stack, Link, Typography, Button } from '@mui/material';
import { AuthFormLayout } from '../components/AuthFormLayout';
import { GoogleButton } from '../components/GoogleButton';
import { DividerWithText } from '../components/DividerWithText';
import { FormHeader } from '../components/FormHeader';

type LoginFormValues = {
  email: string;
  password: string;
};

export function LoginForm() {
  const defaultValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  const { toggleDrawer } = useDrawer();

  return (
    <FormContainer defaultValues={defaultValues} onSuccess={handleSubmit}>
      <AuthFormLayout>
        <FormHeader
          title="Log in to continue"
          subtitle="Welcome back! Enter your details to continue."
        />
        <GoogleButton />
        <DividerWithText />
        <Stack
          spacing={{
            xs: 2,
            sm: 4,
          }}
        >
          <TextFieldElement name="email" label="Email" placeholder="Enter your email" />

          <TextFieldElement
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </Stack>
        <CheckboxElement
          name="agree"
          label={<Typography variant="body1">Remember me</Typography>}
        />

        <Stack spacing={3}>
          <Button variant="contained" type="submit">
            Log in
          </Button>
          <Stack px={2} py={1}>
            <Link
              component="button"
              onClick={toggleDrawer('password-recovery', true)}
              underline="hover"
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                textAlign: 'left',
              }}
            >
              Forgot the password?
            </Link>
          </Stack>
        </Stack>
      </AuthFormLayout>
    </FormContainer>
  );
}
