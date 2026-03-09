import { Box, IconButton } from '@mui/material';
import { socialLinks } from './data/social-link.data';
import { Icon } from '../common/Icon';

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
            width: 40,
            height: 40,
            p: '8px',
            gap: '12px',
            borderRadius: '12px',
            backgroundColor: '#FBF4F3',
            '&:hover': {
              backgroundColor: 'primary.contrastText',
            },
          }}
        >
          <Icon
            name={item.icon}
            width={24}
            height={24}
            style={{ fill: 'currentColor', display: 'block' }}
          />
        </IconButton>
      ))}
    </Box>
  );
}
