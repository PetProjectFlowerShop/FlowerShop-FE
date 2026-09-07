import { Box, Typography, type Theme, type TypographyProps } from '@mui/material';
import type { SystemCssProperties } from '@mui/system';

type MarginBottom = SystemCssProperties<Theme>['marginBottom'];
type Gap = SystemCssProperties<Theme>['gap'];
type SubtitleVariant = TypographyProps['variant'];

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  extratitle?: string;
  mb?: MarginBottom;
  gap?: Gap;
  subtitleVariant?: SubtitleVariant;
}

export const SectionHeader = ({
  title,
  subtitle,
  extratitle,
  mb,
  gap,
  subtitleVariant,
}: SectionHeaderProps) => {
  return (
    <Box sx={{ mb: mb ?? { xs: 2, sm: 4 }, gap: gap ?? '16px', display: 'grid' }}>
      {title && <Typography variant="h2">{title}</Typography>}
      {subtitle && (
        <Typography variant={subtitleVariant ?? 'h4'} color="text.secondary">
          {subtitle}
        </Typography>
      )}
      {extratitle && <Typography variant="h4">{extratitle}</Typography>}
    </Box>
  );
};
