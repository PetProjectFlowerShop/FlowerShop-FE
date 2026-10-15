import { Box, Typography, CardMedia } from '@mui/material';
import { SectionContainer } from '../layouts/SectionContainer';
import type { PostSection } from '@/types/post';

interface PostContentProps {
  posts: PostSection[];
}

export const PostContentSection: React.FC<PostContentProps> = ({ posts }) => {
  return (
    <section data-testid="product-details-section">
      <SectionContainer>
        <Box sx={{ maxWidth: '800px', mx: 'auto', p: 3 }}>
          {posts.map((post) => (
            <Box key={post.id} sx={{ mb: 6 }} component="section">
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'serif' }}>
                {post.title}
              </Typography>

              {post.content.map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}

              {post.imgURL && (
                <CardMedia
                  component="img"
                  image={post.imgURL}
                  alt={post.title}
                  sx={{ borderRadius: 4, mt: 3, mb: 2, maxHeight: '400px', objectFit: 'cover' }}
                />
              )}
            </Box>
          ))}
        </Box>
      </SectionContainer>
    </section>
  );
};
