import GoogleIcon from '@/assets/icons/google.svg';

import { Button, Typography } from '@mui/material';

interface GoogleButtonProps {
  onClick?: () => void;
}

export function GoogleButton({ onClick }: GoogleButtonProps) {
  return (
    <Button
      fullWidth
      variant="outlined"
      startIcon={<img src={GoogleIcon} alt="Google" width={24} height={24} />}
      onClick={onClick}
    >
      <Typography color="text.primary" sx={{ fontWeight: 600 }}>
        Log in with Google
      </Typography>
    </Button>
  );
}
