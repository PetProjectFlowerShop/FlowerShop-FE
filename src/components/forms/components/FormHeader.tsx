import { Stack, Typography } from '@mui/material';

interface FormHeaderProps {
  title: string;
  subtitle?: string;
}

export function FormHeader({ title, subtitle }: FormHeaderProps) {
  return (
    <Stack spacing={{ xs: 1, sm: 4 }}>
      <Typography variant="h2" component="h2">
        {title}
      </Typography>

      {subtitle && (
        <Typography variant="caption" color="text.primary">
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
}
