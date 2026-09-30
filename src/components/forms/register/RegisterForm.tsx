import { useState } from 'react';
import { FormContainer } from 'react-hook-form-mui';
import { Stack, Link, Typography } from '@mui/material';
import { useDrawer } from '@/hooks/useDrawer.ts';
import { AuthFormLayout } from '../components/AuthFormLayout';
import { GoogleButton } from '../components/GoogleButton';
import { DividerWithText } from '../components/DividerWithText';
import { FormHeader } from '../components/FormHeader';
import { SubmitButton } from '../SubmitButton';

import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '@/store/auth.store';
import { registerSchema, type RegisterFormValues } from '@/validation/registerSchema';
import { registerRequest } from '@/api/authApi';
import { useNavigate } from 'react-router-dom';

import { RegisterFields } from './RegisterFields';
import { NewsletterDialog } from './NewsletterDialog';

export function RegisterForm() {
  const defaultValues: RegisterFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    privacyPolicy: false,
  };

  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [formData, setFormData] = useState<RegisterFormValues | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const login = useAuthStore((state) => state.login);
  const { toggleDrawer, closeDrawer } = useDrawer();
  const navigate = useNavigate();

  const handleSubmit = (data: RegisterFormValues) => {
    setRegistrationError('');
    setFormData(data);
    setNewsletterOpen(true);
  };

  const handleNewsletterChoice = async (isMarketingAllow: boolean) => {
    if (!formData) return;

    setIsRegistering(true);

    try {
      const response = await registerRequest({
        email: formData.email,
        password: formData.password,
        isMarketingAllow,
      });

      login(response.token, 'ROLE_USER');
      setNewsletterOpen(false);
      setFormData(null);
      closeDrawer();
      navigate('/my-profile');
    } catch (error) {
      console.error('Registration error:', error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          setNewsletterOpen(false);
          setRegistrationError('An account with this email already exists.');
        } else {
          setNewsletterOpen(false);
          setRegistrationError('Something went wrong. Please try again.');
        }
      }
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <>
      <FormContainer
        defaultValues={defaultValues}
        resolver={zodResolver(registerSchema)}
        onSuccess={handleSubmit}
      >
        <AuthFormLayout>
          <FormHeader
            title="Create Account"
            subtitle="Sign up to order and view your purchase history"
          />
          <GoogleButton />
          <DividerWithText />
          <RegisterFields registrationError={registrationError} />

          <Stack spacing={{ xs: 3, sm: 10 }}>
            <SubmitButton>Sign up</SubmitButton>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
              <Typography variant="caption" px={2} py={4}>
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

      <NewsletterDialog
        open={newsletterOpen}
        isLoading={isRegistering}
        onChoice={handleNewsletterChoice}
        onClose={() => setNewsletterOpen(false)}
      />
    </>
  );
}
