import { Stack } from '@mui/material';
import { SectionContainer } from '../layouts/SectionContainer';
import { SectionHeader } from '../common/SectionHeader';
import { ContactsInfo } from './ContactsInfo';

export const ContactsSection = () => {
  return (
    <section>
      <SectionContainer>
        <Stack
          spacing={{
            xs: 7,
            sm: 10,
          }}
        >
          <SectionHeader
            title="Get in Touch"
            subtitle="Find all the ways to connect with our studio below"
          />
          <ContactsInfo />
        </Stack>
      </SectionContainer>
    </section>
  );
};
