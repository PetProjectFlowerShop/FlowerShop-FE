import { CheckboxElement, TextFieldElement } from 'react-hook-form-mui';
import { Stack, Typography } from '@mui/material';

interface LoginFieldsProps {
  loginError: string;
}

export function LoginFields({ loginError }: LoginFieldsProps) {
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
    </>
  );
}
