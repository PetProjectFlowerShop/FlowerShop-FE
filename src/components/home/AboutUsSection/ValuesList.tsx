import { List, ListItem, Typography } from '@mui/material';

export function ValuesList({ valuesList }: { valuesList: string[] }) {
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
