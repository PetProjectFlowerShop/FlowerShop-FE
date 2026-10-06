import { Box, Grid, Typography } from '@mui/material';
import { SectionContainer } from '../layouts/SectionContainer';
import { PostCard } from './PostCard';
import { postsData } from './data/postsData';

export const BlogRecentGalerySection = () => {
  if (!postsData || postsData.length < 3) return null;

  const recentPosts = postsData.slice(0, 3);

  return (
    <section>
      <SectionContainer>
        <Grid container spacing={{ xs: 7, tablet: 10, desktop: 6 }}>
          <Grid size={{ tablet: 12, desktop: 6 }}>
            <Box display="flex" flexDirection="column" height="100%" justifyContent="flex-end">
              <Typography variant="h3" component="h3" mb={'40px'}>
                Recent Posts
              </Typography>

              <Grid container spacing={{ xs: 4, tablet: 6 }}>
                {recentPosts.slice(0, 2).map((post) => (
                  <Grid size={{ xs: 6, tablet: 12 }} key={post.id}>
                    <PostCard post={post} variant="horizontal" />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, desktop: 6 }}>
            <PostCard post={recentPosts[2]} variant="vertical" desktopHeight={544} />
          </Grid>
        </Grid>
      </SectionContainer>
    </section>
  );
};
