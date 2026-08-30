import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  type Theme,
  CardActionArea,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import review_temp from '@/assets/images/review_temp.webp';
import { Link } from 'react-router-dom';
import type { TeamMember } from '@/types/teamMember';

export interface ReviewCustomerCardProps {
  data: TeamMember;
}

const getCardStyles = () => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  transition: 'transform 0.4s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
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
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  '&:last-child': {
    paddingBottom: 0,
  },
});

const getNameStyles = (theme: Theme) => ({
  ...theme.typography.h4,
  textAlign: 'center',
  color: theme.palette.text.primary,
  mb: 2,
});

const getPositionStyles = (theme: Theme) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
});

export const CardMemberTeam = ({ data }: ReviewCustomerCardProps) => {
  const theme = useTheme();
  const { imgURL, name, position } = data;

  return (
    <Card elevation={0} sx={getCardStyles()}>
      <CardActionArea component={Link} to="/blog" sx={getActionAreaStyles()}>
        <CardMedia
          component="img"
          image={imgURL || review_temp}
          alt={name}
          sx={{
            borderRadius: '20px',
            width: '100%',
            height: 'auto',
            aspectRatio: '416/520',
            objectFit: 'cover',
          }}
        />

        <CardContent sx={getContentStyles()}>
          <Typography variant="body2" sx={getPositionStyles(theme)}>
            {position}
          </Typography>
          <Typography component="h4" sx={getNameStyles(theme)}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
