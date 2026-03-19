import { Box, Typography } from '@mui/material';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <Box sx={{ mb: { xs: 2, md: 4 } }}>
      <Typography variant="h2" sx={{ mb: subtitle ? 1 : 0 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h4" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
