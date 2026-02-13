import { Box, Typography } from '@mui/material';
import { SelectLanguage } from './SelectLanguage';

export function TopBar() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        height: '48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'secondary.dark',
        px: '72px',
        py: '4px',
        boxSizing: 'border-box',
        color: 'primary.contrastText',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: 'secondary.contrastText',
          lineHeight: '140%',
          textAlign: 'center',
          flexGrow: 1,
        }}
      >
        FREE DELIVERY FROM $250
      </Typography>
      <SelectLanguage />
    </Box>
  );
}
