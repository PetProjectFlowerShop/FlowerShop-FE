import { legalsLinks } from './data/legal.data';
import { Box, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export function LegalLink() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '40px',
        justifyContent: 'center',
        color: 'common.white',
      }}
    >
      {legalsLinks.map((link) => (
        <MuiLink
          key={link.path}
          component={RouterLink}
          to={link.path}
          underline="none"
          sx={{
            color: 'common.white',
            '&:hover': { opacity: 0.6 },
          }}
        >
          {link.label}
        </MuiLink>
      ))}
    </Box>
  );
}
