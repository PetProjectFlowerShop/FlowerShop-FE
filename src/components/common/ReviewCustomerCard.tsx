import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Rating,
  type Theme,
  CardActionArea,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import review_temp from '@/assets/images/review_temp.webp';
import type { Review } from '@/types/review';
import { Link } from 'react-router-dom';

export interface ReviewCustomerCardProps {
  review: Review;
}

const getCardStyles = () => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const getActionAreaStyles = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  height: '100%',
  '&:hover .MuiCardActionArea-focusHighlight': {
    opacity: 0,
  },
});

const getContentStyles = () => ({
  p: '16px 0 0 0',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  '&:last-child': {
    paddingBottom: 0,
  },
});

const getRatingWrapperStyles = () => ({
  display: 'flex',
  mb: 1.5,
});

const getMessageStyles = (theme: Theme) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  textAlign: 'left' as const,
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical' as const,
  overflow: 'hidden',
});

export const ReviewCustomerCard = ({ review }: ReviewCustomerCardProps) => {
  const theme = useTheme();
  const { message, imgURL, rating, name } = review;

  return (
    <Card elevation={0} sx={getCardStyles()}>
      <CardActionArea component={Link} to="/blog" sx={getActionAreaStyles()}>
        <CardMedia component="img" image={imgURL || review_temp} alt={name} />

        <CardContent sx={getContentStyles()}>
          <Typography component="h3" variant="body" sx={{ mb: 1, fontWeight: 500 }}>
            {name}
          </Typography>

          <Box sx={getRatingWrapperStyles()}>
            <Rating value={rating} readOnly precision={0.5} size="small" />
          </Box>

          <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
            <Typography variant="body" sx={getMessageStyles(theme)}>
              {message}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
