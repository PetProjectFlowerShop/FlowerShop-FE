import { List, ListItem, Typography } from '@mui/material';

const valuesList = [
  'Quality & Freshness: We select only the finest blooms, ensuring every arrangement is vibrant and long-lasting.',
  'Creativity: Every bouquet is a unique creation, combining colors, textures, and fragrances to delight the senses.',
  'Customer Delight: Your happiness is our priority. We strive to provide a seamless shopping experience and personalized service.',
  'Sustainability: We care for the environment, using eco-friendly packaging and sourcing flowers responsibly.',
];

export function ValuesList() {
  return (
    <List sx={{ p: 0, paddingLeft: 2 }}>
      {valuesList.map((value) => (
        <ListItem
          key={value}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2,
            p: 0,
          }}
        >
          <Typography component="span">•</Typography>

          <Typography variant="body1" letterSpacing={0}>
            {value}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
