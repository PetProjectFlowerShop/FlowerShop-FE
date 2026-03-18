import { Box, Button, Stack } from '@mui/material';
import { contacts, type ContactsData } from '../footer/data/contacts.data';
import { ContactsRow } from './ContactsRow';
import { type Theme } from '@mui/material/styles';

export function HeaderContacts() {
  return (
    <Stack
      spacing={2}
      sx={(theme: Theme) => ({
        mt: theme.spacing(theme.spacingTokens.stackS),
        px: theme.spacing(theme.spacingTokens.stackXs),
      })}
    >
      {contacts.map((item: ContactsData) => (
        <ContactsRow key={item.label} {...item} />
      ))}
      <Box sx={{ py: 5, px: 5 }}>
        <Button
          variant="outlined"
          sx={(theme: Theme) => ({
            color: 'text.primary',
            py: theme.spacing(theme.spacingTokens.stackXs),
            px: theme.spacing(theme.spacingTokens.stackS),
          })}
        >
          Call me
        </Button>
      </Box>
    </Stack>
  );
}
