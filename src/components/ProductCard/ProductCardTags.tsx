import { Stack, useTheme } from '@mui/material';
import { CardTag } from '../common/CardTag';

type ProductCardTagsProps = {
  discountPercent?: number;
  isSeasonOffer: boolean;
  isNew: boolean;
  isPopular: boolean;
};

const getTagsContainerStyles = {
  position: 'absolute',
  top: 8,
  left: 8,
  zIndex: 2,
};

export const ProductCardTags = ({
  discountPercent,
  isSeasonOffer,
  isPopular,
  isNew,
}: ProductCardTagsProps) => {
  const theme = useTheme();
  return (
    <Stack direction="column" alignItems="flex-start" spacing={1} sx={getTagsContainerStyles}>
      {discountPercent && (
        <CardTag
          label={`-${discountPercent}%`}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
            borderColor: theme.palette.secondary.main,
          }}
        />
      )}
      {isSeasonOffer && <CardTag label="Season offer" tag="offer" />}
      {isNew && <CardTag label="New" tag="new" />}
      {isPopular && <CardTag label="Popular" tag="popular" />}
    </Stack>
  );
};
