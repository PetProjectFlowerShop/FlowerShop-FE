import { List, ListItem, Typography, type TypographyProps } from '@mui/material';

type ValuesListProps = {
  valuesList: string[];
  typographyVariant?: TypographyProps['variant'];
};

export function ValuesList({ valuesList, typographyVariant }: ValuesListProps) {
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

          <Typography variant={typographyVariant} letterSpacing={0}>
            {value}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
