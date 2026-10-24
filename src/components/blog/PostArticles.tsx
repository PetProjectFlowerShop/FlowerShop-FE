import { Box, Typography, CardMedia } from '@mui/material';
import type { PostSection } from '@/types/post';

interface PostArticlesProps {
  posts: PostSection[];
}

export const PostArticles: React.FC<PostArticlesProps> = ({ posts }) => {
  return (
    <Box>
      {posts.map((post) => (
        <Box
          key={post.id}
          id={post.id}
          sx={{ mb: 10, scrollMarginTop: '120px' }}
          component="section"
        >
          <Typography variant="h3" component="h3" gutterBottom sx={{ mb: 6 }}>
            {post.title}
          </Typography>
          <Box display="flex" flexDirection="column" gap={4}>
            {post.content.map((paragraph, index) => (
              <Box display={'flex'} gap={4}>
                <Typography
                  key={index}
                  component="p"
                  variant="body"
                  sx={{ color: 'text.primary', lineHeight: 1.4 }}
                >
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
                mb: { xs: 7, tablet: 8, desktop: 10 },
                maxHeight: '280px',
                objectFit: 'cover',
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};
