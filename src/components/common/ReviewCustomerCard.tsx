import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Box,
  Typography,
  Rating,
  type Theme,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import review_temp from './../../assets/images/review_temp.webp';
import type { Review } from '../../types/review';

export interface ReviewCustomerCardProps {
  review: Review;
}

const getCardStyles = (theme: Theme) => ({
  maxWidth: 360,
  margin: '0 auto',
  borderRadius: '16px',
  transition: 'box-shadow 0.3s ease-in-out',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'scale(1.04)',
  },
});

const getImageContainerStyles = () => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '1',
});

const getContentStyles = () => ({
  p: 1.5,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

const getNameStyles = (theme: Theme) => ({
  ...theme.typography.body2,
  fontWeight: 400,
  color: theme.palette.text.primary,
  lineHeight: 1.4,
  mb: 1,
});

const getRatingWrapperStyles = () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mb: 1.25,
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
    <Card elevation={0} sx={getCardStyles(theme)}>
      <Box sx={getImageContainerStyles()}>
        <CardMedia component="img" image={imgURL || review_temp} alt={name} />
      </Box>

      <CardContent sx={getContentStyles()}>
        <Typography component="h3" sx={getNameStyles(theme)}>
          {name}
        </Typography>

        <Box sx={getRatingWrapperStyles()}>
          <Rating value={rating} readOnly precision={0.5} size="small" />
        </Box>

        <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
          <Typography variant="body2" sx={getMessageStyles(theme)}>
            {message}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
