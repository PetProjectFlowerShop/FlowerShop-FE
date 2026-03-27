import { Card, CardMedia, CardContent, Stack, Box, type Theme } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import review_temp from './../../assets/images/review_temp.svg';

export interface Review {
  id: string;
  name: string;
  imgURL: string;
  raiting: number;
  message: string;
}

export interface ReviewCustomerCardProps {
  review: Review;
  currencySymbol?: string;
  onFavoriteClick?: (id: string) => void;
  onAddToCartClick?: (id: string) => void;
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
  },
});

const getImageContainerStyles = () => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '1',
});

const getTagsContainerStyles = (theme: Theme) => ({
  position: 'absolute',
  top: theme.spacing(theme.spacingTokens.stackXs),
  left: theme.spacing(theme.spacingTokens.stackXs),
  maxWidth: 'calc(100% - 70px)',
});

export const ReviewCustomerCard = ({ review }: ReviewCustomerCardProps) => {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, message, imgURL, raiting, name } = review;

  return (
    <Card elevation={0} sx={getCardStyles(theme)}>
      <Box sx={getImageContainerStyles()}>
        <CardMedia
          component="img"
          image={imgURL || review_temp}
          alt={'review'}
          sx={{ borderRadius: '16px', objectFit: 'cover', height: '100%' }}
        />

        <Stack
          direction="column"
          alignItems="flex-start"
          spacing={theme.spacingTokens.microX}
          sx={getTagsContainerStyles(theme)}
        ></Stack>
      </Box>

      <CardContent
        sx={{ pt: 2.5, pb: 1, px: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}
      ></CardContent>
    </Card>
  );
};
