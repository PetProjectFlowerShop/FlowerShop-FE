import { Box, Card, CardActions, CardContent, Skeleton, Stack } from '@mui/material';

const getCardStyles = () => ({
  maxWidth: 360,
  margin: '0 auto',
  borderRadius: '16px',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
});

const getImageContainerStyles = () => ({
  position: 'relative',
  width: '100%',
  height: { xs: '248px', tablet: '400px' },
  aspectRatio: '1',
  borderRadius: '16px',
});

export const ProductCardSkeleton = () => {
  return (
    <Card sx={getCardStyles()}>
      <Box sx={getImageContainerStyles()}>
        <Skeleton variant="rounded" width="100%" height="100%" />
      </Box>

      <CardContent
        sx={{ p: 0, mb: 2, mt: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          sx={{ mb: 1, height: { tablet: '56px' } }}
        >
          <Skeleton width="70%" height={28} />
          <Skeleton variant="rounded" width={40} height={40} />
        </Stack>

        <Skeleton width={80} height={32} />
      </CardContent>

      <CardActions>
        <Skeleton variant="rounded" width="100%" height={48} />
      </CardActions>
    </Card>
  );
};
