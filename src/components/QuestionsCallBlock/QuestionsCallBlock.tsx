import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import questionsImage from '@/assets/images/have-any-questions.webp';
import { QuestionsForm } from './QuestionsForm';

export function QuestionsCallBlock() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          mb: { xs: 7, md: 9, lg: 10 },
        }}
      >
        Have any questions?
      </Typography>

      <Grid
        container
        spacing={6}
        sx={{
          alignItems: {
            lg: 'flex-start',
          },
        }}
      >
        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
              lg: 'column-reverse',
            },
            gap: {
              md: 4,
              lg: 3,
            },
            alignItems: {
              xs: 'initial',
              md: 'center',
              lg: 'flex-start',
            },
          }}
        >
          <Box
            component="img"
            src={questionsImage}
            alt="Have any questions?"
            sx={{
              display: {
                xs: 'none',
                md: 'block',
              },
              flex: {
                md: '0 0 50%',
                lg: 'none',
              },
              width: {
                lg: '100%',
              },
              height: {
                md: 120,
                lg: 'auto',
              },
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
          <Typography variant="body1">
            Leave your details below, and our team will get in touch to help you with anything you
            need.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <QuestionsForm />
        </Grid>
      </Grid>
    </Box>
  );
}
