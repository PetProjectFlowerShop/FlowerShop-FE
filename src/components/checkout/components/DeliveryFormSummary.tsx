import { Fragment } from 'react';
import { Box, Typography } from '@mui/material';
import { useCheckoutStore } from '@/store/checkout.store';

export function DeliveryFormSummary() {
  const deliveryDetails = useCheckoutStore((state) => state.deliveryDetails);

  if (!deliveryDetails) return null;

  const { city, street, building, entrance, apartment, orderDate, orderTime, orderComment } =
    deliveryDetails;

  const items = [
    { label: 'City', value: city },
    { label: 'Street', value: street },
    { label: 'Building', value: building },
    { label: 'Entrance', value: entrance },
    { label: 'Apartment', value: apartment },
    { label: 'Order Date', value: orderDate },
    { label: 'Order Time', value: orderTime },
    { label: 'Order Comment', value: orderComment },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'max-content 1fr',
        columnGap: 2,
        rowGap: 5,
      }}
    >
      {items.map(({ label, value }) => (
        <Fragment key={label}>
          <Typography variant="body" sx={{ color: 'text.secondary' }}>
            {label}:
          </Typography>

          <Typography variant="body" sx={{ overflowWrap: 'anywhere' }}>
            {value?.trim() || '-'}
          </Typography>
        </Fragment>
      ))}
    </Box>
  );
}
