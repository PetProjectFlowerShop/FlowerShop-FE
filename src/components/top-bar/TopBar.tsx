import { Box, Typography, Container } from '@mui/material';
import { SelectLanguage } from './SelectLanguage';
import { type Theme } from '@mui/material/styles';

export function TopBar() {
  return (
    <Box
      component="div"
      sx={{
        minHeight: '48px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'secondary.dark',
        color: 'primary.contrastText',
      }}
    >
      <Container
        sx={(theme: Theme) => ({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: {
            xs: theme.spacing(theme.spacingTokens.microX),
          },
        })}
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
      </Container>
    </Box>
  );
}
