import { IconButton } from '@mui/material';
import HeartIconFilled from '@mui/icons-material/Favorite';
import HeartIconOutline from '@mui/icons-material/FavoriteBorder';

type ProductCardFavoriteButtonProps = {
  isFavorite: boolean;
  onClick: () => void;
};

export const ProductCardFavoriteButton = ({
  isFavorite,
  onClick,
}: ProductCardFavoriteButtonProps) => {
  return (
    <IconButton
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      onMouseDown={(e) => e.stopPropagation()}
      variant="secondary"
      sx={{ zIndex: 3, mt: { tablet: 2 } }}
    >
      {isFavorite ? <HeartIconFilled /> : <HeartIconOutline />}
    </IconButton>
  );
};
