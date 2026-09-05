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
          desktop: columns === 3 ? '306fr 416fr 306fr' : 'repeat(4, 1fr)',
        },
        columnGap: 5,
        rowGap: 5,
        mb: { xs: 6, desktop: 8 },
      }}
    >
      {data.map((item, index) => {
        const isLeader = columns === 3 && index === 1;
        console.log('fix', !isLeader && columns === 3);
        return (
          <Box
            key={item.id}
            sx={{
              height: 'max-content',
              alignSelf: 'center',
              ...(isLeader && {
                order: { xs: -1, desktop: 0 },
                gridColumn: { xs: '1 / -1', desktop: 'auto' },
                mx: { xs: 0, tablet: 'auto', desktop: 0 },
                width: { xs: '100%', tablet: '360px', desktop: '100%' },
              }),
              ...(!isLeader &&
                columns === 3 && {
                  maxWidth: { desktop: '306px' },
                  mx: { desktop: 'auto' },
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
