import { Icon } from '../common/Icon';
import { contacts, type ContactsData } from './data/contacts.data';
import { Box, Typography, Link as MuiLink } from '@mui/material';

function ContactRow({ icon, value, href, iconSize = 24 }: ContactsData) {
  const content = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'common.white',
      }}
    >
      <Icon
        name={icon}
        width={iconSize}
        height={iconSize}
        style={{ flexShrink: 0, fill: 'currentColor' }}
      />

      <Typography
        sx={{
          fontSize: '20px',
          color: 'inherit',
        }}
      >
        {value}
      </Typography>
    </Box>
  );

  return href ? (
    <MuiLink
      href={href}
      underline="none"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: 'inherit',
        '&:hover': { opacity: 0.6 },
      }}
    >
      {content}
    </MuiLink>
  ) : (
    content
  );
}

export function ContactInfo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      {contacts.map((item) => (
        <ContactRow key={item.label} {...item}></ContactRow>
      ))}
    </Box>
  );
}
