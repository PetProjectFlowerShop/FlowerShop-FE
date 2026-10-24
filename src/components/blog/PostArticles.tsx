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
          <Typography variant="h3" component="h3" gutterBottom sx={{ fontFamily: 'serif', mb: 6 }}>
            {post.title}
          </Typography>

          {post.content.map((paragraph, index) => (
            <Typography
              key={index}
              component="p"
              variant="body"
              sx={{ color: 'text.primary', lineHeight: 1.4, mb: 4, display: 'block' }}
            >
              {paragraph}
            </Typography>
          ))}

          {post.imgURL && (
            <CardMedia
              component="img"
              image={post.imgURL}
              alt={post.title}
              sx={{ borderRadius: 5, mt: 10, mb: 10, maxHeight: '280px', objectFit: 'cover' }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};
