import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import type { PostSection } from '@/types/post';

interface TableOfContentsProps {
  sections: PostSection[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeId, setActiveId] = useState<string>('');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <Box sx={{ position: 'sticky', top: 100 }}>
      <Typography variant="h6" sx={{ fontFamily: 'serif', mb: 3 }}>
        Table of content
      </Typography>
      <List sx={{ p: 0 }}>
        {sections.map((section) => {
          const isActive = activeId === section.id;

          return (
            <ListItem
              key={section.id}
              sx={{
                px: 0,
                py: 0.5,
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="bodyFixed"
                    component="a"
                    href={`#${section.id}`}
                    onClick={(e) => handleClick(e, section.id)}
                    sx={{
                      textDecoration: 'none',
                      color: isActive ? 'text.primary' : 'text.secondary',
                      fontWeight: isActive ? 'bold' : 'normal',
                      transition: 'all 0.2s',
                      '&:hover': { color: 'text.primary' },
                    }}
                  >
                    {section.title}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
