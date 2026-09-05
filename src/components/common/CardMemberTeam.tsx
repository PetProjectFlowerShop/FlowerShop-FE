import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import review_temp from '@/assets/images/review_temp.webp';
import type { TeamMember } from '@/types/teamMember';

export interface CardMemberTeamProps {
  data: TeamMember & { isLeader?: boolean };
  isLeader?: boolean;
}

// const getCardStyles = () => ({
//   width: '100%',
//   margin: '0 auto',
//   backgroundColor: 'transparent',
//   display: 'flex',
//   flexDirection: 'column',
//   // height: '100%',
//   transition: 'transform 0.4s ease',
//   willChange: 'transform',
//   transform: 'translateZ(0)',
//   backfaceVisibility: 'hidden',
//   '&:hover': {
//     transform: 'scale(1.04)',
//   },
// });

// const getContentStyles = () => ({
//   p: '16px 0 0 0',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-start',
//   flexDirection: 'column',
//   width: '100%',
//   minHeight: { xs: '76px', desktop: '84px' },
//   '&:last-child': {
//     paddingBottom: 0,
//   },
// });

// const getNameStyles = (theme: Theme, isLeader?: boolean) => ({
//   ...theme.typography.h4,
//   fontFamily: 'serif',
//   fontSize: isLeader ? '1.25rem' : '1.1rem',
//   color: theme.palette.text.primary,
//   textAlign: 'center' as const,
//   mb: 0.5,
// });

// const getPositionStyles = (theme: Theme) => ({
//   ...theme.typography.body1,
//   color: theme.palette.text.secondary,
//   textAlign: 'center' as const,
//   fontSize: '0.875rem',
//   mb: 0.5,
// });

export const CardMemberTeam = ({ data, isLeader }: CardMemberTeamProps) => {
  const theme = useTheme();
  const { imgURL, name, position } = data;

  //const isHighlighted = isLeader ?? data.isLeader;
  const isHighlighted = Boolean(isLeader);
  console.log(`Ім'я: ${name} | Лідер?: ${isHighlighted}`);
  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        transition: 'transform 0.4s ease',
        '&:hover': { transform: 'scale(1.04)' },
      }}
    >
      <CardMedia
        component="img"
        image={imgURL || review_temp}
        alt={name}
        sx={{
          borderRadius: '20px',
          objectFit: 'cover',
          objectPosition: '50% 26%',
          width: '100%',
          display: 'block',
          height: 'auto',
          aspectRatio: isHighlighted
            ? { xs: '343/380', tablet: '360/424', desktop: '416/556' }
            : { xs: '164/220', tablet: '332/384', desktop: '306/384' },
        }}
      />

      <CardContent
        sx={{
          p: '16px 0 0 0',
          textAlign: 'center',
          '&:last-child': { pb: 0 },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            ...theme.typography.body1,
            color: theme.palette.text.secondary,
            fontSize: '0.875rem',
            mb: 0.5,
          }}
        >
          {position}
        </Typography>
        <Typography
          component="h4"
          sx={{
            ...theme.typography.h4,
            fontFamily: 'serif',
            fontSize: isHighlighted ? '1.25rem' : '1.1rem',
            color: theme.palette.text.primary,
            mb: 0,
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
