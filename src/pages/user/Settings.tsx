import { Stack, Typography, Paper, Button } from '@mui/material';
import { ProfileLayout } from '@/components/userProfile/ProfileLayout';

export function Settings() {
  return (
    <ProfileLayout>
      <Paper
        sx={{
          width: '100%',
        }}
      >
        <Stack spacing={10} p={10}>
          <Typography variant="h4">Change Password</Typography>

          <Button variant="contained">Save Changes</Button>
        </Stack>
      </Paper>
    </ProfileLayout>
  );
}
