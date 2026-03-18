import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Icon } from '../common/Icon';
import type { ContactsData } from '../footer/data/contacts.data';
import { type Theme } from '@mui/material/styles';

export function ContactsRow({ value, href, icon }: ContactsData) {
  const content = (
    <Box
      sx={(theme: Theme) => ({
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        gap: theme.spacing(theme.spacingTokens.micro),
        px: theme.spacing(theme.spacingTokens.stackXs),
        py: theme.spacing(theme.spacingTokens.micro),
      })}
    >
      <Icon name={icon} width={24} height={24} />
      <Typography
        sx={(theme: Theme) => ({
          color: 'text.primary',
          fontWeight: theme.typography.fontWeightRegular,
          fontSize: 'text.caption',
          '&:hover': { color: 'text.secondary' },
        })}
      >
        {value}
      </Typography>
    </Box>
  );

  return href ? (
    <MuiLink href={href} underline="none">
      {content}
    </MuiLink>
  ) : (
    content
  );
}
