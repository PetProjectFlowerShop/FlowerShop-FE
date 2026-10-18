import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import type { PostSection } from '@/types/post';

interface TableOfContentsProps {
  sections: PostSection[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const container = document.getElementById('scrollable-content-area');

    if (element && container) {
      const topPos = element.offsetTop - container.offsetTop;

      container.scrollTo({
        top: topPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box>
      <Typography variant="h4" component={'h4'} sx={{ fontFamily: 'serif', mb: 3 }}>
        Table of content
      </Typography>
      <List sx={{ p: 0 }}>
        {sections.map((section) => (
          <ListItem
            key={section.id}
            onClick={() => handleScroll(section.id)}
            sx={{
              cursor: 'pointer',
              px: 1,
              py: 1,
              '&:hover .MuiTypography-root': { color: 'text.primary' },
            }}
          >
            <ListItemText
              primary={
                <Typography variant="bodyFixed" sx={{ transition: 'color 0.2s' }}>
                  {section.title}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
