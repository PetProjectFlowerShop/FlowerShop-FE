import { CheckboxElement, TextFieldElement } from 'react-hook-form-mui';
import { Link, Stack, Typography } from '@mui/material';

interface RegisterFieldsProps {
  registrationError: string;
}

export function RegisterFields({ registrationError }: RegisterFieldsProps) {
  return (
    <>
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

        <TextFieldElement
          name="confirmPassword"
          label="Confirm password"
          placeholder="Confirm your password"
          type="password"
          required
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
    </>
  );
}
