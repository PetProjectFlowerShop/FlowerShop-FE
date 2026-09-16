import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import { PageLayout } from '@/components/layouts/PageLayout';
import { SectionContainer } from '@/components/layouts/SectionContainer';
import { Box, Stack, Typography } from '@mui/material';
import { ProfileNavigation } from '@/components/userProfile/ProfileNavigation/ProfileNavigation';
import { LogoutButton } from '@/components/logoutButton/LogoutButton';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <>
      <DynamicBreadcrumbs mb={{ xs: 2 }} />

      <PageLayout>
        <section>
          <SectionContainer>
            <Typography variant="h2" component="h1" mb={{ xs: 7, tablet: 20, desktop: 30 }}>
              Hello, our user!
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  desktop: '306px 1fr',
                },
                gap: { xs: 4, desktop: 6 },
              }}
            >
              <Stack spacing={{ xs: 4, tablet: 10 }}>
                <ProfileNavigation />

                <Box
                  sx={{
                    display: {
                      xs: 'none',
                      desktop: 'block',
                    },
                  }}
                >
                  <LogoutButton />
                </Box>
              </Stack>

              <Stack spacing={{ xs: 4, tablet: 10 }}>
                {children}
                <Box
                  py={3}
                  sx={{
                    display: {
                      xs: 'block',
                      desktop: 'none',
                    },
                  }}
                >
                  <LogoutButton />
                </Box>
              </Stack>
            </Box>
          </SectionContainer>
        </section>
      </PageLayout>
    </>
  );
}
