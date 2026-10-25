import type { ReactNode } from 'react';
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

type CheckoutStep = 1 | 2 | 3;

interface CheckoutSectionProps {
  step: CheckoutStep;
  title: string;
  activeStep: CheckoutStep;
  completed: boolean;
  children: ReactNode;
  summary?: ReactNode;
  onEdit: (step: CheckoutStep) => void;
}

export function CheckoutSection({
  step,
  title,
  activeStep,
  completed,
  children,
  summary,
  onEdit,
}: CheckoutSectionProps) {
  const isActive = activeStep === step;
  const isPending = activeStep < step;

  return (
    <Paper
      variant="outlined"
      sx={{ px: { xs: 5, tablet: 8 }, py: { xs: 4, tablet: 10 }, mb: { xs: 5, tablet: 8 } }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              width: 40,
              height: 40,
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              bgcolor: completed ? 'primary.main' : 'grey.200',
              color: completed ? 'white' : 'text.primary',
            }}
          >
            {completed ? <CheckIcon /> : step}
          </Box>

          <Typography variant="h4">{title}</Typography>
        </Stack>

        {completed && !isActive && (
          <IconButton aria-label={`Edit`} onClick={() => onEdit(step)}>
            <EditOutlinedIcon />
          </IconButton>
        )}
      </Stack>

      {!isPending && <Box sx={{ mt: 6 }}>{completed && !isActive ? summary : children}</Box>}
    </Paper>
  );
}
