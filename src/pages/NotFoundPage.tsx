import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={6}>
      <Typography variant="h4" gutterBottom>
        404 – Page not found
      </Typography>

      <Button variant="contained" onClick={() => navigate('/')}>
        Go to home
      </Button>
    </Box>
  );
}
