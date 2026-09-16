import { ProfileLayout } from '@/components/userProfile/ProfileLayout';
import { Stack, Typography, Paper, Button, Box, List, ListItem, ListItemText } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export function MyProfile() {
  const profileDetails = [
    { label: 'Full Name:', value: 'John Johnson' },
    { label: 'Phone Number:', value: '(099) 423 879' },
    { label: 'Email:', value: 'John@email.com' },
    { label: 'Birthday date:', value: '01.01.2001' },
  ];

  return (
    <ProfileLayout>
      <Paper
        sx={{
          width: '100%',
        }}
      >
        <Stack spacing={6} p={{ xs: 5, tablet: 10 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h4">Personal details</Typography>

            <Button
              variant="text"
              startIcon={<EditOutlinedIcon />}
              sx={{
                minWidth: 'auto',
                p: 0,
                color: 'text.primary',
                '& .MuiButton-startIcon': {
                  '& svg': {
                    fontSize: 24,
                  },
                },
              }}
            >
              Edit
            </Button>
          </Stack>

          <List dense>
            {profileDetails.map((item) => (
              <ListItem key={item.label} disableGutters>
                <ListItemText
                  primary={
                    <Typography variant="body">
                      <Box component="span" sx={{ fontWeight: 600 }}>
                        {item.label}
                      </Box>{' '}
                      {item.value}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Paper>

      <Paper
        sx={{
          width: '100%',
        }}
      >
        <Stack spacing={6} p={{ xs: 5, tablet: 10 }}>
          <Typography variant="h4">Saved delivery info</Typography>

          <Button variant="contained" color="secondary">
            + Add new info
          </Button>
        </Stack>
      </Paper>
    </ProfileLayout>
  );
}
