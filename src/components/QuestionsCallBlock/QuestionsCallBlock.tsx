import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import questionsImage from '@/assets/images/have-any-questions.webp';
import { SectionContainer } from '../layouts/SectionContainer';
import { QuestionsForm } from './QuestionsForm';

export function QuestionsCallBlock() {
  return (
    <section>
      <SectionContainer>
        <Typography
          variant="h2"
          sx={{
            mb: { xs: 7, tablet: 9, desktop: 10 },
          }}
        >
          Have any questions?
        </Typography>

        <Box
          sx={{
            display: { desktop: 'grid' },
            gridTemplateColumns: { tablet: 'minmax(0, 1fr) minmax(0, 1fr)' },
            gap: { desktop: 6 },
          }}
        >
          <Box
            sx={{
              display: { tablet: 'grid', desktop: 'flex' },
              flexDirection: { desktop: 'column-reverse' },
              gridTemplateColumns: { tablet: 'minmax(0, 1fr) minmax(0, 1fr)' },
              alignItems: { tablet: 'center' },
              gap: { tablet: 4 },
              mb: { xs: 4, tablet: 6, desktop: 0 },
            }}
          >
            <Box
              component="img"
              src={questionsImage}
              alt="Have any questions?"
              sx={{
                display: {
                  xs: 'none',
                  tablet: 'block',
                },

                width: '100%',
                height: {
                  tablet: 120,
                  desktop: 'auto',
                },
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
            <Typography variant="body">
              Leave your details below, and our team will get in touch to help you with anything you
              need.
            </Typography>
          </Box>

          <QuestionsForm />
        </Box>
      </SectionContainer>
    </section>
  );
}
