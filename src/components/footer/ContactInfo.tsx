import { contacts, type ContactsData } from './data/contacts.data';
import { Box, Typography, Link as MuiLink } from '@mui/material';

function ContactRow({ icon, label, value, href, iconSize = 24 }: ContactsData) {
  const content = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={label}
        sx={{
          width: iconSize,
          height: iconSize,
          flexShrink: 0,
        }}
      />
      <Typography
        sx={{
          fontSize: '20px',
          color: 'common.white',
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
