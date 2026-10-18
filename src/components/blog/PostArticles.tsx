import { Box, Typography, CardMedia } from '@mui/material';
import type { PostSection } from '@/types/post';

interface PostArticlesProps {
  posts: PostSection[];
}

export const PostArticles: React.FC<PostArticlesProps> = ({ posts }) => {
  return (
    <Box>
      {posts.map((post) => (
        <Box key={post.id} id={post.id} sx={{ mb: 6 }} component="section">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'serif' }}>
            {post.title}
          </Typography>

          {post.content.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body"
              sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}
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
  );
};
