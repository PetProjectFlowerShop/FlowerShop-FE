import { Box, Typography, CardMedia, Stack } from '@mui/material';
import type { PostSection } from '@/types/post';

interface PostArticlesProps {
  posts: PostSection[];
}

export const PostArticles = ({ posts }: PostArticlesProps) => {
  return (
    <Stack spacing={{ xs: 7, tablet: 8, desktop: 10 }}>
      {posts.map((post) => (
        <Box key={post.id} id={post.id} sx={{ scrollMarginTop: '150px' }} component="section">
          <Typography variant="h3" component="h3" gutterBottom sx={{ mb: 6 }}>
            {post.title}
          </Typography>
          <Box display="flex" flexDirection="column" gap={4}>
            {post.content.map((paragraph, index) => (
              <Box display={'flex'} gap={4}>
                <Typography key={index} component="p" variant="body">
                  {paragraph}
                </Typography>
              </Box>
            ))}
          </Box>
          {post.imgURL && (
            <CardMedia
              component="img"
              image={post.imgURL}
              alt={post.title}
              sx={{
                borderRadius: 5,
                mt: { xs: 7, tablet: 8, desktop: 10 },

                height: { xs: '240px', tablet: '280px' },

                objectFit: 'cover',
              }}
            />
          )}
        </Box>
      ))}
    </Stack>
  );
};
