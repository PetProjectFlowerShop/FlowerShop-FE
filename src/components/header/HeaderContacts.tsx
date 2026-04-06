import { Box, Button, Stack } from '@mui/material';
import { contacts } from '../footer/data/contacts.data';
import type { ContactsData } from '../../types/contacts';
import { ContactRow } from '../footer/ContactInfo';

export function HeaderContacts() {
  return (
    <Stack
      spacing={2}
      sx={(theme) => ({
        mt: theme.spacingTokens.stackS,
        px: theme.spacingTokens.stackL,
        gap: theme.spacingTokens.stackS,
      })}
    >
      {contacts.map((item: ContactsData) => (
        <ContactRow key={item.label} {...item} color="text.primary" />
      ))}
      <Box sx={{ py: 5 }}>
        <Button
          variant="outlined"
          sx={(theme) => ({
            color: 'text.primary',
            py: theme.spacingTokens.stackXs,
            px: theme.spacingTokens.stackS,
          })}
        >
          Call me
        </Button>
      </Box>
    </Stack>
  );
}
