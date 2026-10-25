import { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import type { PostSection } from '@/types/post';

interface TableOfContentsProps {
  sections: PostSection[];
}

export const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element) => element !== null);

    if (!elements.length) return;

    let ticking = false;

    const updateActiveSection = () => {
      const activeElement = [...elements]
        .filter((element) => element.getBoundingClientRect().top <= 150)
        .at(-1);

      setActiveId(activeElement?.id ?? elements[0].id);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);
  return (
    <Box sx={{ position: 'sticky', top: 100 }}>
      <Typography variant="h4" component={'h4'} sx={{ mb: 6, px: 4, py: 0 }}>
        Table of content
      </Typography>
      <List sx={{ p: 0 }}>
        {sections.map((section) => {
          const isActive = activeId === section.id;

          return (
            <ListItem
              key={section.id}
              sx={{
                px: 4,
                py: 3,
              }}
            >
              <ListItemText
                sx={{ my: 0 }}
                primary={
                  <Typography
                    variant="bodyFixed"
                    component="a"
                    href={`#${section.id}`}

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
