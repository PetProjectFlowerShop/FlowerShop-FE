import { Box } from '@mui/material';
import type { TeamMember } from '@/types/teamMember';
import { CardMemberTeam } from './CardMemberTeam';

interface GaleryManagementProps {
  data: TeamMember[];
  columns?: 3 | 4;
}

export const GaleryManagement = ({ data, columns = 3 }: GaleryManagementProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          desktop: `repeat(${columns}, 1fr)`,
        },
        columnGap: { xs: 2, tablet: 3, desktop: 4 },
        rowGap: { xs: 4, desktop: 6 },
        mb: { xs: 6, desktop: 8 },
        alignItems: 'center',
      }}
    >
      {data.map((item, index) => {
        const isLeader = columns === 3 && (item.isLeader || index === 1);

        return (
          <Box
            key={item.id}
            sx={{
              ...(isLeader && {
                order: { xs: -1, desktop: 0 },
                gridColumn: { xs: '1 / -1', desktop: 'auto' },
                mx: { xs: 0, tablet: 'auto', desktop: 0 },

                width: { xs: '100%', tablet: '360px', desktop: '100%' },
              }),
            }}
          >
            <CardMemberTeam data={item} isLeader={isLeader} />
          </Box>
        );
      })}
    </Box>
  );
};
