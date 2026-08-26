import { List, ListItem, Typography } from '@mui/material';

const valuesList = [
  'Quality & Freshness - we carefully select only fresh flowers to ensure long-lasting beauty.',
  'Creative Design - each arrangement is thoughtfully crafted, inspired by nature.',
  'Customer Care - we offer warm experience from the first click to delivery.',
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
