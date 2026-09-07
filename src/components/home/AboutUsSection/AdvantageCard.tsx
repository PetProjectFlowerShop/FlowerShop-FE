import { Box, Typography } from '@mui/material';

export type AdvantageCardProps = {
  img: string;
  title: string;
  text: string;
};

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  gap: 1,
};

export function AdvantageCard({ img, title, text }: AdvantageCardProps) {
  return (
    <Box sx={cardStyles}>
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{ width: '145px', height: '145px', objectFit: 'cover' }}
      />
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <Typography variant="body" component="p">
        {text}
      </Typography>
    </Box>
  );
}
