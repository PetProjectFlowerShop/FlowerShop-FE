import { Box, Typography } from '@mui/material';

export function EmptyProductList() {
  return (
    <Box display="flex" flexDirection="column" gap={6}>
      <Typography variant="h3">No bouquets found</Typography>
      <Typography>
        We couldn't find any bouquets matching your selection. Try clearing some filters to see more
        options.
      </Typography>
    </Box>
  );
}
