import { Divider, Stack, Typography } from '@mui/material';

interface DividerWithTextProps {
  text?: string;
}

export function DividerWithText({ text = 'or' }: DividerWithTextProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{
        width: '100%',
        minHeight: 24,
      }}
    >
      <Divider sx={{ flex: 1 }} />

      <Typography variant="body2" color="text.secondary" whiteSpace="nowrap">
        {text}
      </Typography>

      <Divider sx={{ flex: 1 }} />
    </Stack>
  );
}
