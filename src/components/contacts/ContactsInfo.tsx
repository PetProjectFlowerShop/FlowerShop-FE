import Grid from '@mui/material/Grid';

import { ContactsInfoItem } from './ContactsInfoItem';
import { contacts } from './data/contactsInfo';

export function ContactsInfo() {
  return (
    <Grid container spacing={4} rowSpacing={6} justifyContent="center">
      {contacts.map((contact) => (
        <Grid key={contact.image} size={{ xs: 6, lg: 3 }}>
          <ContactsInfoItem {...contact} />
        </Grid>
      ))}
    </Grid>
  );
}
