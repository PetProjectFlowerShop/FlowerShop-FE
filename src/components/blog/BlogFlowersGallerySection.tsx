import { Box, Grid } from '@mui/material';
import { SectionHeader } from '../common/SectionHeader';
import { SectionContainer } from '../layouts/SectionContainer';
import { PostCard } from './PostCard';
import { postsData } from './data/postsData';

export const BlogFlowersGallerySection = () => {
  if (!postsData || postsData.length < 3) return null;

  const allPosts = postsData.slice(3);

  return (
    <section>
      <SectionContainer>
        {allPosts.length > 0 && (
          <Box component="section">
            <SectionHeader title="Our flowers posts" mb={10} />
            <Grid container columnSpacing={{ xs: 4, tablet: 6 }} rowSpacing={{ xs: 6, tablet: 10 }}>
              {allPosts.map((post) => (
                <Grid key={post.id} size={{ xs: 6, tablet: 6, desktop: 4 }}>
                  <PostCard post={post} variant="vertical" />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </SectionContainer>
    </section>
  );
};
