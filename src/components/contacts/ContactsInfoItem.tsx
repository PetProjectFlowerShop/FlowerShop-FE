import { Typography, Box } from '@mui/material';

interface ContactsInfoItemProps {
  image: string;
  title: string;
  description: string;
}

export function ContactsInfoItem({ image, title, description }: ContactsInfoItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: 145,
          height: 145,
          objectFit: 'cover',
        }}
      />

      <Typography sx={{ mt: { xs: 1, tablet: 2 } }} variant="h4">
        {title}
      </Typography>

      <Typography variant="body1" sx={{ mt: { xs: 1, tablet: 2 } }}>
        {description}
      </Typography>
    </Box>
  );
}
