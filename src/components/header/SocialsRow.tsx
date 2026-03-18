import { IconButton, Stack } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { Icon } from '../common/Icon';
import { socialLinks } from '../footer/data/social-link.data';

export function SocialsRow() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={(theme: Theme) => ({
        gap: theme.spacing(theme.spacingTokens.microPlus),
        px: theme.spacing(theme.spacingTokens.stackXs),
        mt: theme.spacing(theme.spacingTokens.stackM),
        mx: theme.spacing(theme.spacingTokens.stackXs),
      })}
    >
      {socialLinks.map((social) => (
        <IconButton
          key={social.icon}
          component="a"
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={(theme: Theme) => ({
            width: 40,
            height: 40,
            padding: '8px',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: 'secondary.main',
            color: 'common.white',
            '&:hover': {
              backgroundColor: 'secondary.dark',
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <Icon name={social.icon} />
        </IconButton>
      ))}
    </Stack>
  );
}
