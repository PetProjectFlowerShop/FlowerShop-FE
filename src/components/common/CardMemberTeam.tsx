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

export interface CardMemberTeamProps {
  data: TeamMember & { isLeader?: boolean };
  isLeader?: boolean;
}

const getCardStyles = () => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  transition: 'transform 0.4s ease',
  willChange: 'transform',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
  '&:hover': {
    transform: 'scale(1.04)',
  },
});

const getActionAreaStyles = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '100%',
  '&:hover .MuiCardActionArea-focusHighlight': {
    opacity: 0,
  },
});

const getContentStyles = () => ({
  p: '16px 0 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  '&:last-child': {
    paddingBottom: 0,
  },
});

const getNameStyles = (theme: Theme, isLeader?: boolean) => ({
  ...theme.typography.h4,
  fontFamily: 'serif',
  fontSize: isLeader ? '1.25rem' : '1.1rem',
  color: theme.palette.text.primary,
  textAlign: 'center' as const,
  mb: 0.5,
});

const getPositionStyles = (theme: Theme) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  textAlign: 'center' as const,
  fontSize: '0.875rem',
  mb: 0.5,
});

export const CardMemberTeam = ({ data, isLeader }: CardMemberTeamProps) => {
  const theme = useTheme();
  const { imgURL, name, position } = data;
  const isHighlighted = isLeader ?? data.isLeader;

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
            aspectRatio: isHighlighted ? '416/520' : '416/424',
            objectFit: 'cover',
          }}
        />

        <CardContent sx={getContentStyles()}>
          <Typography variant="body2" sx={getPositionStyles(theme)}>
            {position}
          </Typography>
          <Typography component="h4" sx={getNameStyles(theme, isHighlighted)}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
