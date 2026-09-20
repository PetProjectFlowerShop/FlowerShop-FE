import React from 'react';
import { Card, CardMedia, CardContent, Typography, Link, Box } from '@mui/material';

interface Post {
  id: number;
  title: string;
  description: string;
  imgURL: string;
  link?: string;
}

interface PostCardProps {
  post: Post;
  variant?: 'vertical' | 'horizontal';
}

export const PostCard: React.FC<PostCardProps> = ({ post, variant = 'vertical' }) => {
  const isHorizontal = variant === 'horizontal';

  return (
    <Card
      component="article"
      elevation={1}
      sx={{
        display: 'flex',
        height: '100%',
        flexDirection: isHorizontal ? { xs: 'column', tablet: 'row' } : 'column',
        borderRadius: 2,
        transition: 'box-shadow 0.3s ease',
        boxShadow: 2,
        '&:hover': {
          boxShadow: (theme) => theme.shadows[4],
        },
      }}
    >
      <CardMedia
        component="img"
        image={post.imgURL}
        alt={post.title}
        loading="lazy"
        sx={{
          width: isHorizontal ? { xs: '100%', tablet: '40%' } : '100%',
          aspectRatio: isHorizontal ? { xs: '1/1', tablet: 'auto' } : '4/3',
          objectFit: 'cover',
          flexShrink: isHorizontal ? 0 : undefined,
          minHeight: isHorizontal ? 'auto' : { xs: 198, tablet: 0 },
        }}
      />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          p: { xs: 2, tablet: 4 },
          '&:last-child': { pb: 4 },
        }}
      >
        <Typography
          component="h4"
          gutterBottom
          sx={{
            typography: { xs: 'h4' },
            color: 'text.primary',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {post.title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb: 4,
            typography: { xs: 'caption', tablet: 'bodyFixed' },
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.description}
        </Typography>

        <Box mt="auto">
          <Link
            href={post.link}
            underline="hover"
            color="text.primary"
            sx={{
              typography: { xs: 'captionFixed', tablet: 'bodyFixed' },
              fontWeight: 'bold',
            }}
          >
            Read more
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};
