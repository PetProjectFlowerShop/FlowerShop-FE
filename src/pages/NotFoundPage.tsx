import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import imgNotFound from '@/assets/images/404.webp';

export function NotFoundPage() {
  return (
    <Box textAlign="center" sx={{ my: { xs: 20, tablet: 30 } }}>
      <Box
        component="img"
        src={imgNotFound}
        alt="Not found page"
        sx={{
          width: { xs: '300px', tablet: '600px' },
        }}
      />
      <Typography variant="h3">Oops! We can't find this page.</Typography>
      <Typography variant="body1" sx={{ mt: '16px' }}>
        The page you’re looking for has withered away.
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: { xs: '344px', tablet: '400px' },
          height: { xs: '56px', tablet: '60px' },
          mt: '40px',
          backgroundColor: 'secondary.main',
        }}
        component={Link}
        to="/"
      >
        Go to home page
      </Button>
    </Box>
  );
}
