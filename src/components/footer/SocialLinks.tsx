import { Box, IconButton } from '@mui/material';
import { socialLinks } from './data/social-link.data';

export function SocialLinks() {
  return (
    <Box sx={{ display: 'flex', gap: '12px' }}>
      {socialLinks.map((item) => (
        <IconButton
          key={item.name}
          aria-label={item.name}
          component="a"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: 36,
            height: 36,
            p: '8px 12px',
            gap: '10px',
            borderRadius: '12px',
            backgroundColor: '#FBF4F3',
            '&:hover': {
              backgroundColor: 'primary.contrastText',
            },
          }}
        >
          <Box component="img" src={item.icon} alt={item.name} />
        </IconButton>
      ))}
    </Box>
  );
}
