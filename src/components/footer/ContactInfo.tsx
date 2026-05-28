import { Icon } from '../common/Icon';
import { contacts } from './data/contacts.data';
import type { ContactsData } from '@/types/contacts';
import { Box, Typography, Link as MuiLink } from '@mui/material';

interface ContactRowProps extends ContactsData {
  color?: string;
}
function ContactRow({ icon, value, href, iconSize = 24, color = 'common.white' }: ContactRowProps) {
  const content = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: color,
      }}
    >
      <Icon
        name={icon}
        width={iconSize}
        height={iconSize}
        style={{ flexShrink: 0, fill: 'currentColor' }}
      />

      <Typography variant="caption">{value}</Typography>
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
        <ContactRow key={item.label} {...item} color="common.white" />
      ))}
    </Box>
  );
}
export { ContactRow };
