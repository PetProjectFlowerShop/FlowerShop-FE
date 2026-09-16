import { useNavigate } from 'react-router-dom';
import { FormContainer, TextFieldElement, CheckboxElement } from 'react-hook-form-mui';
import { useDrawer } from '@/hooks/useDrawer.ts';
import { Stack, Link, Typography } from '@mui/material';
import { AuthFormLayout } from '../components/AuthFormLayout';
import { GoogleButton } from '../components/GoogleButton';
import { DividerWithText } from '../components/DividerWithText';
import { FormHeader } from '../components/FormHeader';
import { SubmitButton } from '../SubmitButton';

import { loginRequest } from '@/api/authApi';
import { useAuthStore } from '@/store/auth.store';
import { useState } from 'react';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/validation/loginSchema';

export function LoginForm() {
  interface LoginFormValues {
    email: string;
    password: string;
    rememberMe: boolean;
  }

  const defaultValues: LoginFormValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const [loginError, setLoginError] = useState('');
  const login = useAuthStore((state) => state.login);
  const { closeDrawer } = useDrawer();
  const navigate = useNavigate();

  const handleSubmit = async (data: LoginFormValues) => {
    console.log('LOGIN DATA:', data);
    setLoginError('');
    try {
      const { email, password } = data;
      const response = await loginRequest({
        email,
        password,
      });

      console.log('LOGIN RESPONSE:', response);
      login(response.body.token, response.body.role);
      closeDrawer();
      navigate('/my-profile');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setLoginError('Invalid email or password');
        return;
      }
      console.error('Login error:', error);
    }
  };

  const { toggleDrawer } = useDrawer();

  return (
    <FormContainer
      defaultValues={defaultValues}
      resolver={zodResolver(loginSchema)}
      onSuccess={handleSubmit}
    >
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
          <TextFieldElement name="email" label="Email" placeholder="Enter your email" required />

          <TextFieldElement
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            required
          />

          {loginError && (
            <Typography variant="body" color="error">
              {loginError}
            </Typography>
          )}
        </Stack>
        <CheckboxElement
          name="rememberMe"
          label={<Typography variant="bodyFixed">Remember me</Typography>}
        />

        <Stack spacing={3}>
          <SubmitButton>Log in</SubmitButton>
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
