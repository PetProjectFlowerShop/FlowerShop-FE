import { useState } from 'react';
import { FormContainer, TextFieldElement, CheckboxElement } from 'react-hook-form-mui';
import { Stack, Link, Typography } from '@mui/material';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';
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
            name="privacyPolicy"
            label={
              <Typography
                variant="body"
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

          {registrationError && (
            <Typography variant="captionFixed" color="error.main">
              {registrationError}
            </Typography>
          )}

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

      <Dialog
        open={newsletterOpen}
        onClose={isRegistering ? undefined : () => setNewsletterOpen(false)}
      >
        <DialogTitle sx={{ textAlign: 'center' }}>Stay in the loop</DialogTitle>
        <DialogContent>
          Be the first to know about new arrivals, promotions, and special offers.
        </DialogContent>
        <DialogActions
          sx={{
            flexDirection: 'column',
            gap: 2,
            alignItems: 'stretch',
          }}
        >
          <Button
            variant="contained"
            onClick={() => handleNewsletterChoice(true)}
            disabled={isRegistering}
          >
            Allow
          </Button>
          <Button
            onClick={() => handleNewsletterChoice(false)}
            disabled={isRegistering}
            sx={{ color: 'text.primary', fontWeight: 600 }}
          >
            Not now
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
