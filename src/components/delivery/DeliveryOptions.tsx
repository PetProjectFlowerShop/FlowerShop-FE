import { SectionContainer } from '../layouts/SectionContainer';
import { Grid, Paper, Stack, Typography } from '@mui/material';
import { deliveryOptions } from './data/deliveryOptions';

export function DeliveryOptions() {
  return (
    <section>
      <SectionContainer>
        <Stack spacing={{ xs: 7, tablet: 10 }}>
          <Typography variant="h2">Delivery options</Typography>

          <Grid container spacing={{ xs: 4, tablet: 6 }}>
            {deliveryOptions.map(({ title, description }) => (
              <Grid key={title} size={{ xs: 12, tablet: 6 }} sx={{ display: 'flex' }}>
                <Paper
                  sx={{
                    width: '100%',
                  }}
                >
                  <Stack spacing={6} px={6} py={10}>
                    <Typography variant="h4">{title}</Typography>

                    <Typography variant="body1">{description}</Typography>
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
