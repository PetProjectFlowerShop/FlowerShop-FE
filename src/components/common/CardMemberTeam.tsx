import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import review_temp from '@/assets/images/review_temp.webp';
import type { TeamMember } from '@/types/teamMember';

export interface CardMemberTeamProps {
  data: TeamMember & { isLeader?: boolean };
  variant?: 'leader' | 'side-manager' | 'regular';
}

export const CardMemberTeam = ({ data, variant = 'regular' }: CardMemberTeamProps) => {
  const theme = useTheme();
  const { imgURL, name, position } = data;

  const getAspectRatio = () => {
    if (variant === 'leader') {
      return { xs: '343 / 380', tablet: '360 / 424', desktop: '416 / 556' };
    }
    if (variant === 'side-manager') {
      return { xs: '164 / 220', tablet: '332 / 384', desktop: '416 / 424' };
    }
    return { xs: '164 / 220', tablet: '332 / 384', desktop: '306 / 384' };
  };

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
          objectPosition: '50% 10%',
          width: '100%',
          display: 'block',
          height: 'auto',
          aspectRatio: getAspectRatio(),
        }}
      />

      <CardContent
        sx={{
          pb: 0,
          px: 0,
          pt: { xs: '16px', tablet: '24px' },
          textAlign: 'center',
          '&:last-child': { pb: 0 },
          display: 'flex',

          flexDirection: 'column',
          gap: { xs: 1, tablet: 2 },
        }}
      >
        <Typography
          variant="body"
          sx={{
            color: theme.palette.text.secondary,
            mb: 0.5,
          }}
        >
          {position}
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
