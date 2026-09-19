import { Box, Grid, Stack, Typography } from '@mui/material';
import { SectionContainer } from '../layouts/SectionContainer';
import { PostCard } from './PostCard';
import { postsData } from './data/postsData';

export const BlogRecentGalerySection = () => {
  if (!postsData || postsData.length < 3) return null;

  const recentPosts = postsData.slice(0, 3);

  return (
    <section>
      <SectionContainer>
        <Box component="section" mb={10}>
          <Grid container spacing={3}>
            {/* Ліва колонка */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box display="flex" flexDirection="column" height="100%">
                <Typography variant="h4" component="h2" fontFamily="serif" mb={'40px'}>
                  Recent Posts
                </Typography>

                <Stack spacing={3}>
                  <Box>
                    <PostCard post={recentPosts[0]} variant="horizontal" />
                  </Box>
                  <Box>
                    <PostCard post={recentPosts[1]} variant="horizontal" />
                  </Box>
                </Stack>
              </Box>
            </Grid>

            {/* Права колонка */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box height="100%">
                <PostCard post={recentPosts[2]} variant="vertical" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </SectionContainer>
    </section>
  );
};
