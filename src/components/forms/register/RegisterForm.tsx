import { FormContainer, TextFieldElement, CheckboxElement } from 'react-hook-form-mui';
import { Stack, Link, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { GoogleButton } from '../components/GoogleButton';
import { DividerWithText } from '../components/DividerWithText';
import { FormHeader } from '../components/FormHeader';

type RegisterFormValues = {
  name: string;
  password: string;
  confirmPassword: string;
};

export function RegisterForm() {
  const defaultValues: RegisterFormValues = {
    name: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (data: RegisterFormValues) => {
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
      <Stack
        spacing={{
          xs: 3,
          sm: 6,
        }}
        sx={{
          py: 20,
          px: {
            xs: 4,
            sm: 10,
            lg: 18,
          },
        }}
      >
        <FormHeader
          title="Create Account"
          subtitle="Sign up to order and view your purchase history"
        />
        <GoogleButton />
        <DividerWithText />
        <Stack spacing={4}>
          <TextFieldElement name="name" label="Name" placeholder="Name" />

          <TextFieldElement
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
          />

          <TextFieldElement
            name="confirmPassword"
            label="Confirm password"
            placeholder="Confirm password"
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
          <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
            <Typography variant="caption" color="text.body1">
              Already have an account?
            </Typography>

            <Link
              component={RouterLink}
              to="/login"
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
      </Stack>
    </FormContainer>
  );
}
