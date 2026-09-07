import { SectionContainer } from '../layouts/SectionContainer';
import { Grid, Paper, Stack, Typography } from '@mui/material';
import { SectionHeader } from '@/components/common/SectionHeader';
import { peymentOptions } from './data/peymentOptions';

export function PaymentOptions() {
  return (
    <section>
      <SectionContainer>
        <Stack spacing={{ xs: 7, tablet: 10 }}>
          <SectionHeader
            title="Payment options"
            subtitle="Secure and convenient ways to pay for your blossoms"
          />

          <Grid container spacing={{ xs: 4, tablet: 6 }}>
            {peymentOptions.map(({ title, description }) => (
              <Grid key={title} size={{ xs: 12, desktop: 4 }} sx={{ display: 'flex' }}>
                <Paper
                  sx={{
                    width: '100%',
                  }}
                >
                  <Stack spacing={6} px={6} py={10}>
                    <Typography variant="h4">{title}</Typography>

                    <Typography variant="body">{description}</Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </SectionContainer>
    </section>
  );
}
