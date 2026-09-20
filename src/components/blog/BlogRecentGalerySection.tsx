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
        <Box mb={10}>
          <Grid container spacing={{ xs: 7, tablet: 10, desktop: 6 }}>
            <Grid size={{ tablet: 12, desktop: 6 }}>
              <Box display="flex" flexDirection="column" height="100%" justifyContent="flex-end">
                <Typography variant="h3" component="h3" mb={'40px'}>
                  Recent Posts
                </Typography>

                <Grid container spacing={{ xs: 3, tablet: 6 }}>
                  {recentPosts.slice(0, 2).map((post) => (
                    <Grid size={{ xs: 6, tablet: 12 }} key={post.id}>
                      <Box height={{ xs: '352px', tablet: '216px' }}>
                        <PostCard post={post} variant="horizontal" />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, desktop: 6 }}>
              <Box height={{ xs: '381px', tablet: '520px', desktop: '544px' }}>
                <PostCard post={recentPosts[2]} variant="vertical" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </SectionContainer>
    </section>
  );
};
