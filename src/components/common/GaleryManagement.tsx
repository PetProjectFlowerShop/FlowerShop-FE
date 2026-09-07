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
          desktop: columns === 3 ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
        },
        columnGap: { xs: '16px', tablet: '24px', desktop: '24px' },
        rowGap: { xs: '24px', tablet: '40px', desktop: '40px' },
        mb: { xs: 6, desktop: 8 },
      }}
    >
      {data.map((item, index) => {
        const isLeader = columns === 3 && index === 1;
        const isSideManager = columns === 3 && index !== 1;
        const cardVariant = isLeader ? 'leader' : isSideManager ? 'side-manager' : 'regular';

        return (
          <Box
            key={item.id}
            sx={{
              height: 'max-content',
              alignSelf: { xs: 'start', desktop: 'center' },
              ...(isLeader && {
                order: { xs: -1, desktop: 0 },
                gridColumn: { xs: '1 / -1', desktop: 'auto' },
                justifySelf: 'center',
                mx: { xs: 0, tablet: 'auto', desktop: 0 },
                width: { xs: '100%', tablet: '360px', desktop: '100%' },
                maxWidth: { desktop: '416px' },
              }),
              ...(isSideManager && {
                justifySelf: 'center',
                maxWidth: { xs: '164px', tablet: '332px', desktop: '416px' },
                mx: { desktop: 'auto' },
              }),
              ...(!isLeader &&
                !isSideManager && {
                  maxWidth: { xs: '164px', tablet: '332px', desktop: '306px' },
                }),
            }}
          >
            <CardMemberTeam data={item} variant={cardVariant} />
          </Box>
        );
      })}
    </Box>
  );
};
