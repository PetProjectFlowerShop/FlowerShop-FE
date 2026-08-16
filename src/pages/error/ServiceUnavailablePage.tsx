import { Box, Button, Typography } from '@mui/material';
import imgError from '@/assets/images/503.webp';

export default function ServiceUnavailablePage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Box textAlign="center" sx={{ my: { xs: 20, tablet: 30 } }}>
      <Box
        component="img"
        src={imgError}
        alt=""
        sx={{
          width: { xs: '300px', tablet: '600px' },
        }}
      />
      <Typography variant="h3">Too many bouquets, too little time!</Typography>
      <Typography variant="body1" sx={{ mt: '16px' }}>
        Our florists are working at full speed to handle an influx of orders. Please take a breath
        and try refreshing the page in a few minutes.
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: { xs: '344px', tablet: '400px' },
          height: { xs: '56px', tablet: '60px' },
          mt: '40px',
          backgroundColor: 'secondary.main',
        }}
        onClick={handleRefresh}
      >
        Refresh Page
      </Button>
    </Box>
  );
}
