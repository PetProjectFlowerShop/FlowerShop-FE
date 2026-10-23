import { Fragment } from 'react';
import { Box, Typography } from '@mui/material';
import { useCheckoutStore } from '../store/checkout.store';

export function CustomerDetailsSummary() {
  const customerDetails = useCheckoutStore((state) => state.customerDetails);

  if (!customerDetails) return null;

  const { fullName, phone, email, recipientName, recipientPhone, greetingMessage } =
    customerDetails;

  const items = [
    { label: 'Full name', value: fullName },
    { label: 'Your phone', value: phone },
    { label: 'Your email', value: email },
    { label: "Recipient's name", value: recipientName },
    { label: "Recipient's phone", value: recipientPhone },
    { label: 'Your greeting card', value: greetingMessage },
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
