import { Box, Grid } from '@mui/material';
import { SectionHeader } from '../common/SectionHeader';
import { SectionContainer } from '../layouts/SectionContainer';
import { PostCard } from './PostCard';
import { postsData } from './data/postsData';

interface BlogFlowersGallerySectionProps {
  title: string;
  shotPreview?: boolean;
  currentPostId?: number;
}

export const BlogFlowersGallerySection: React.FC<BlogFlowersGallerySectionProps> = ({
  title,
  shotPreview,
  currentPostId,
}) => {
  if (!postsData || postsData.length < 3) {
    return null;
  }

  let displayPosts = postsData.slice(3);

  if (currentPostId) {
    displayPosts = displayPosts.filter((post) => post.id !== currentPostId);
  }

  if (shotPreview) {
    displayPosts = displayPosts.slice(0, 3);
  }

  return (
    <section>
      <SectionContainer>
        {displayPosts.length > 0 && (
          <Box component="section">
            <SectionHeader title={title} mb={10} />
            <Grid container columnSpacing={{ xs: 4, tablet: 6 }} rowSpacing={{ xs: 6, tablet: 10 }}>
              {displayPosts.map((post) => (
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
