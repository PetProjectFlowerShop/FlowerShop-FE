import { Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface SubmitButtonProps {
  children: React.ReactNode;
}

export function SubmitButton({ children }: SubmitButtonProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button variant="contained" type="submit" loading={isSubmitting}>
      {children}
    </Button>
  );
}
