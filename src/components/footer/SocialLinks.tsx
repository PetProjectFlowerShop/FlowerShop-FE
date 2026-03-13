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
          variant="secondary"
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
