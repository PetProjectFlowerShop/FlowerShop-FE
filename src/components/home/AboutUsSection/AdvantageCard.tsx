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
};

export function AdvantageCard({ img, title, text }: AdvantageCardProps) {
  return (
    <Box sx={cardStyles}>
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{ maxWidth: '163px', width: '100%', height: 'auto' }}
      />
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <Typography variant="body1" component="p">
        {text}
      </Typography>
    </Box>
  );
}
