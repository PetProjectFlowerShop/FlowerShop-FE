import { Box, Stack, Typography } from '@mui/material';
import { SectionHeader } from '@/components/common/SectionHeader';
import { SectionContainer } from '../layouts/SectionContainer';

export function ContactsAddress() {
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
            title="Studio Address"
            subtitle="Find us in the heart of the city and pick up your bouquet."
          />
          <Stack spacing={6}>
            <Box
              sx={{
                width: '100%',
                height: 600,
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1131.629828785663!2d30.511252369919298!3d50.45184633583188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5bfb683177%3A0xb687c0a43e59c5fd!2z0YPQuy4g0KDQtdC50YLQsNGA0YHQutCw0Y8sIDEy0LAsINCa0LjQtdCyLCAwMTA1NA!5e0!3m2!1sru!2sua!4v1787399794541!5m2!1sru!2sua"
                sx={{
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Store location"
              />
            </Box>
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'primary.dark',
                borderRadius: '20px',
                p: 4,
              }}
            >
              <Typography variant="body" sx={{ fontWeight: 600 }}>
                Directions
              </Typography>
              <Typography variant="body" sx={{ mt: 3 }}>
                Our studio is located at 12 Kvitkova St., Kyiv. If you're coming by metro, take the
                exit toward the city center—we are just a 5-minute walk away, right next to the
                central park. Look for the green awning and the scent of fresh peonies!
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </SectionContainer>
    </section>
  );
}
