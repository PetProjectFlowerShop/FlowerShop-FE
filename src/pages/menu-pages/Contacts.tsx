import { PageContainer } from '@/components/common/PageContainer';
import { PageLayout } from '@/components/layouts/PageLayout';
import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import { Stack, Typography, Box } from '@mui/material';
import heroImage from '@/assets/images/contacts/hero-contacts-page.webp';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ContactsInfo } from '@/components/contacts/ContactsInfo';
import { ContactsAddress } from '@/components/contacts/ContactsAddress';
import { QuestionsCallBlock } from '@/components/QuestionsCallBlock/QuestionsCallBlock';

export function Contacts() {
  return (
    <PageContainer>
      <DynamicBreadcrumbs />
      <PageLayout>
        <Stack
          spacing={{
            xs: 21,
            sm: 20,
            lg: 30,
          }}
        >
          <Stack
            spacing={{
              xs: 7,
              sm: 10,
            }}
          >
            <Typography variant="h2" component="h1">
              Contacts
            </Typography>
            <Box
              component="img"
              src={heroImage}
              alt="Hero"
              sx={{
                width: '100%',
                height: {
                  xs: 158,
                  sm: 212,
                  lg: 400,
                },
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '20px',
                display: 'block',
              }}
            />
          </Stack>

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
          <ContactsAddress />
          <QuestionsCallBlock />
        </Stack>
      </PageLayout>
    </PageContainer>
  );
}
