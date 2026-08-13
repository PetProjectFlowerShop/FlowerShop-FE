import { FormContainer, TextFieldElement, CheckboxElement } from 'react-hook-form-mui';
import { Stack, Link, Typography, Button } from '@mui/material';
import { useDrawer } from '@/hooks/useDrawer.ts';
import { AuthFormLayout } from '../components/AuthFormLayout';
import { GoogleButton } from '../components/GoogleButton';
import { DividerWithText } from '../components/DividerWithText';
import { FormHeader } from '../components/FormHeader';

type RegisterFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
};

export function RegisterForm() {
  const defaultValues: RegisterFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  };

  const { toggleDrawer } = useDrawer();

  const handleSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <FormContainer defaultValues={defaultValues} onSuccess={handleSubmit}>
      <AuthFormLayout>
        <FormHeader
          title="Create Account"
          subtitle="Sign up to order and view your purchase history"
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

          <TextFieldElement
            name="confirmPassword"
            label="Confirm password"
            placeholder="Confirm your password"
            type="password"
          />
        </Stack>
        <CheckboxElement
          name="agree"
          label={
            <Typography
              variant="body1"
              sx={{
                '& a': {
                  color: 'text.primary',
                  fontWeight: 600,
                },
              }}
            >
              I agree to the{' '}
              <Link href="/terms" underline="hover">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" underline="hover">
                Privacy Policy
              </Link>
            </Typography>
          }
        />
        <Typography variant="caption" color="error.main">
          Please access all statements to continue.
        </Typography>

        <Stack spacing={{ xs: 3, sm: 10 }}>
          <Button variant="contained" type="submit">
            Sign up
          </Button>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Typography variant="caption" color="text.body1" px={2} py={4}>
              Already have an account?
            </Typography>

            <Link
              component="button"
              onClick={toggleDrawer('login', true)}
              underline="hover"
              sx={{
                color: 'text.primary',
                fontWeight: 600,
              }}
            >
              Log in
            </Link>
          </Stack>
        </Stack>
      </AuthFormLayout>
    </FormContainer>
  );
}
