import imgError from '@/assets/images/503.webp';
import { PageLayout } from '@/components/layouts/PageLayout';
import { SectionContainer } from '@/components/layouts/SectionContainer';
import { Box, Button, Typography } from '@mui/material';

export default function ServiceUnavailablePage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <PageLayout mt={{ xs: 16, tablet: 30 }} mb={{ tablet: 30 }}>
      <section>
        <SectionContainer
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <Box
            component="img"
            src={imgError}
            alt=""
            sx={{
              maxWidth: '600px',
              width: '100%',
            }}
          />
          <Box textAlign={{ xs: 'left', tablet: 'center' }}>
            <Typography variant="h3">Too many bouquets, too little time!</Typography>
            <Typography variant="body" sx={{ mt: '16px' }}>
              Our florists are working at full speed to handle an influx of orders.
              <Box component="br" sx={{ display: { xs: 'none', tablet: 'block' } }} />
              Please take a breath and try refreshing the page in a few minutes.
            </Typography>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              maxWidth: '400px',
            }}
            color="secondary"
            onClick={handleRefresh}
          >
            Refresh Page
          </Button>
        </SectionContainer>
      </section>
    </PageLayout>
  );
}
