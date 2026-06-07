import { Typography, type TypographyProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export interface CardTagProps extends Omit<TypographyProps, 'children'> {
  label: string | number;
  tag?: string;
}

export const CardTag = ({ label, tag, sx, ...props }: CardTagProps) => {
  const theme = useTheme();

  let bgColor = theme.palette.grey[400];
  if (tag) {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('new')) {
      bgColor = theme.palette.primary.dark;
    } else if (lowerTag.includes('popular')) {
      bgColor = theme.palette.secondary.dark;
    } else if (lowerTag.includes('offer')) {
      bgColor = '#D88D93';
    }
  }

  return (
    <Typography
      variant="caption"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tag ? bgColor : 'transparent',
        color: tag ? theme.palette.common.white : 'inherit',
        borderRadius: '12px',
        letterSpacing: 0,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: tag ? bgColor : theme.palette.primary.main,
        padding: '8px 12px',
        ...sx,
      }}
      {...props}
    >
      {label}
    </Typography>
  );
};
