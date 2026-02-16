import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';

type Props = {
  open: boolean;
  message?: string;
};

export function GlobalLoading({ open, message = 'Loading...' }: Props) {
  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1,
        color: 'common.white',
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <CircularProgress color="inherit" />
        {message ? (
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {message}
          </Typography>
        ) : null}
      </Box>
    </Backdrop>
  );
}
