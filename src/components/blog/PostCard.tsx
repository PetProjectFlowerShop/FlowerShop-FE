import { Box, Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import React from 'react';

interface Post {
  id: number;
  title: string;
  description: string;
  imgURL: string;
  link?: string;
}

interface PostCardProps {
  post: Post;
  variant?: 'vertical' | 'horizontal' | 'large';
}

export const PostCard: React.FC<PostCardProps> = ({ post, variant = 'vertical' }) => {
  const isHorizontal = variant === 'horizontal';
  const isLarge = variant === 'large';
  return (
    <Card
      component="article"
      sx={{
        display: 'flex',
        height: {
          xs: '100%',
          tablet: isHorizontal ? '216px' : '520px',
          desktop: isHorizontal ? '216px' : isLarge ? '544px' : '520px',
        },
        maxHeight: {
          xs: '344px',
          tablet: '520px',
          desktop: isHorizontal ? '216px' : isLarge ? '544px' : '520px',
        },
        flexDirection: isHorizontal ? { xs: 'column', tablet: 'row' } : 'column',
        borderRadius: 3,
        transition: 'box-shadow 0.3s ease',
        boxShadow: 2,
        '&:hover': {
          boxShadow: (theme) => theme.shadows[4],
        },
        pb: {
          xs: 2,
          tablet: isHorizontal ? 0 : 7,
          desktop: isLarge ? 4 : '',
        },
      }}
    >
      <CardMedia
        component="img"
        image={post.imgURL}
        alt={post.title}
        loading="lazy"
        sx={{
          width: { xs: '100%', tablet: isHorizontal ? '196px' : '100%' },
          objectFit: 'cover',
          height: { xs: '160px', tablet: isHorizontal ? '216px' : 'auto' },
          maxHeight: { tablet: '296px' },
          minHeight: 0,
          flex: { tablet: isHorizontal ? '0 0 196px' : '0 1 296px' },
        }}
      />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: { xs: 2, tablet: 4 },
          pt: { xs: 4 },
          '&:last-child': { pb: 0 },
          mb: { tablet: isHorizontal ? '20px' : '0' },
          flex: { tablet: isHorizontal ? '' : '1 1 auto' },
          minHeight: { tablet: 'min-content' },
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
            overflow: { xs: 'hidden', tablet: 'visible' },
            textOverflow: 'ellipsis',
            mb: { xs: 1, tablet: 2 },
          }}
        >
          {post.title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb: { xs: 4, tablet: 5 },
            typography: { xs: 'caption', tablet: 'bodyFixed' },

            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',

            overflow: { xs: 'hidden', tablet: 'visible' },
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
              ml: 2,
            }}
          >
            Read more
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};
