import { Box, Typography } from '@mui/material';
import { SectionContainer } from '../layouts/SectionContainer';
import { progressData } from './data/progressData';

export const ProgressSection = () => {
  return (
    <section>
      <SectionContainer>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', tablet: 'repeat(2, 1fr)' },
            rowGap: '40px',
            columnGap: '24px',
            mb: { xs: 8, desktop: 12 },
          }}
        >
          {progressData.map((item) => (
            <Box
              key={item.id}
              sx={{
                backgroundColor: 'secondary.light',
                borderRadius: '16px',
                minHeight: { xs: 'auto', desktop: '196px' },
                padding: { xs: '24px', desktop: '32px 24px' },
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                boxShadow: 1,
              }}
            >
              <Typography variant="h5" component="h3" sx={{ color: 'text.primary' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </SectionContainer>
    </section>
  );
};
