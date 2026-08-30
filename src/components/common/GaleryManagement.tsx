import { Box } from '@mui/material';
import type { TeamMember } from '@/types/teamMember';
import { CardMemberTeam } from './CardMemberTeam';

interface GaleryManagementProps {
  data: TeamMember[];
  columns?: 3 | 4;
}

interface GaleryManagementProps {
  data: TeamMember[];
}

export const GaleryManagement = ({ data, columns = 3 }: GaleryManagementProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          tablet: columns === 4 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          desktop: `repeat(${columns}, 1fr)`,
        },
        gap: { xs: 3, desktop: 4 },
        mb: { xs: 6, desktop: 8 },
      }}
    >
      {data.map((item) => (
        <CardMemberTeam key={item.id} data={item} />
      ))}
    </Box>
  );
};
