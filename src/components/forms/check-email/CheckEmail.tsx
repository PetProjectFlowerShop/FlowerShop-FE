import { Stack, Link, Typography } from '@mui/material';
import { useDrawer } from '@/hooks/useDrawer.ts';
import { AuthFormLayout } from '../components/AuthFormLayout';
import { FormHeader } from '../components/FormHeader';

export function CheckEmail() {
  const { toggleDrawer } = useDrawer();

  return (
    <AuthFormLayout>
      <FormHeader
        title="Check your email"
        subtitle="We have sent a password reset link to your email address. 
        Please check your inbox (and spam folder)."
      />

      <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
        <Typography variant="caption" color="text.body1" px={1} py={4}>
          Back to
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
    </AuthFormLayout>
  );
}
