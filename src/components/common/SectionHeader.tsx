import { Box, Typography, type Theme } from '@mui/material';
import type { SystemCssProperties } from '@mui/system';

type MarginBottom = SystemCssProperties<Theme>['marginBottom'];
type Gap = SystemCssProperties<Theme>['gap'];

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  extratitle?: string;
  mb?: MarginBottom;
  gap?: Gap;
}

export const SectionHeader = ({ title, subtitle, extratitle, mb, gap }: SectionHeaderProps) => {
  return (
    <Box sx={{ mb: mb ?? { xs: 2, sm: 4 }, gap: gap ?? '16px', display: 'grid' }}>
      {title && (
        <Typography variant="h2" sx={{ mb: subtitle ? 1 : 0 }}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="h4" color="text.secondary">
          {subtitle}
        </Typography>
      )}
      {extratitle && <Typography variant="h4">{extratitle}</Typography>}
    </Box>
  );
};
