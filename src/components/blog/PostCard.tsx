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
        flexDirection: { xs: 'column', md: isHorizontal ? 'row' : 'column' },
        height: '100%',
        borderRadius: 2,
        transition: 'box-shadow 0.3s ease',
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
          width: { xs: '100%', md: isHorizontal ? '33.333%' : '100%' },
          aspectRatio: {
            xs: isHorizontal ? '1/1' : '4/3',
            md: isHorizontal ? 'auto' : '4/3',
          },
        }}
      />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          p: 2.5,
          '&:last-child': { pb: 2.5 },
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontFamily: 'serif',
            color: 'text.primary',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </Typography>

        <Typography
          variant="body"
          color="text.secondary"
          sx={{
            mb: 2,
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
            sx={{ typography: 'body2', fontWeight: 'bold' }}
          >
            Read more
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};
