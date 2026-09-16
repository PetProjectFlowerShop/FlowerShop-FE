import { Stack, Typography, Paper, Button } from '@mui/material';
import { ProfileLayout } from '@/components/userProfile/ProfileLayout';

export function OrderHistory() {
  return (
    <ProfileLayout>
      <Paper
        sx={{
          width: '100%',
        }}
      >
        <Stack spacing={10} p={10} px={6}>
          <Typography variant="h4">№00123</Typography>
          <Typography variant="body">Proccess</Typography>
          <Button variant="contained">Repeat the order</Button>
        </Stack>
      </Paper>
    </ProfileLayout>
  );
}
