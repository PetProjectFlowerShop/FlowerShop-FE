import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

type Props = {
  title?: string;
  description?: string;
  action?: ReactNode;
};

export function EmptyState({ title = 'Nothing here yet', description, action }: Props) {
  return (
    <Box
      py={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      color="text.secondary"
    >
      <Typography variant="h6">{title}</Typography>

      {description && (
        <Typography variant="body2" sx={{ mt: 1, maxWidth: 400 }}>
          {description}
        </Typography>
      )}

      {action && <Box mt={3}>{action}</Box>}
    </Box>
  );
}
