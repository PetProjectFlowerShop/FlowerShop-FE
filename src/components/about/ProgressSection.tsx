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
                padding: { xs: '28px 16px', tablet: '40px 24px' },
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: 2,
              }}
            >
              <Typography variant="h4" sx={{ color: 'text.primary' }}>
                {item.title}
              </Typography>
              <Typography variant="bodyTablet" sx={{ color: 'text.primary', lineHeight: 1.4 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </SectionContainer>
    </section>
  );
};
