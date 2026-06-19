import { Box, Typography, Container } from '@mui/material';
import { SelectLanguage } from './SelectLanguage';
import { type Theme } from '@mui/material/styles';

type TopBarProps = {
  visible: boolean;
};

export function TopBar({ visible }: TopBarProps) {
  return (
    <Box
      data-testid="top-bar"
      component="div"
      sx={{
        minHeight: '48px',
        display: 'sticky',
        // alignItems: 'center',
        backgroundColor: 'secondary.dark',
        color: 'primary.contrastText',
        top: 0,
        transition: 'transform 300ms ease',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
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
