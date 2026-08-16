import { Box, Button, Typography } from '@mui/material';
import imgError from '@/assets/images/503.webp';
import { PageContainer } from '@/components/common/PageContainer';

export default function ServiceUnavailablePage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <PageContainer>
      <Box textAlign={'center'}>
        <Box
          component="img"
          src={imgError}
          alt=""
          sx={{
            width: { xs: '300px', tablet: '600px' },
          }}
        />
        <Typography variant="h3" textAlign={{ xs: 'left', tablet: 'center' }}>
          Too many bouquets, too little time!
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: '16px' }}
          textAlign={{ xs: 'left', tablet: 'center' }}
        >
          Our florists are working at full speed to handle an influx of orders.
          <Box component="br" sx={{ display: { xs: 'none', tablet: 'block' } }} />
          Please take a breath and try refreshing the page in a few minutes.
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
    </PageContainer>
  );
}
