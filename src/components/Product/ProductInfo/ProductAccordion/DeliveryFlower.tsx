import { AccordionDetails, Box, List, Typography } from '@mui/material';
import { ProductAccordionItem } from './ProductAccordionItem';

import delivery_img from '../../../../assets/images/delivery.webp';

export function DeliveryFlower() {
  return (
    <ProductAccordionItem title="Delivery">
      <AccordionDetails
        sx={{
          px: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <Box
            component="img"
            src={delivery_img}
            alt="Delivery"
            sx={{
              width: '100%',
              maxWidth: 160,
              height: '224px',
              objectFit: 'cover',
              borderRadius: 2,
              display: { xs: 'none', tablet: 'block' },
            }}
          />

          <List sx={{ listStyleType: 'disc', pl: { xs: 3 } }}>
            <Typography component="li">
              Please note that flowers are delivered without a vase, and the candle shown is not
              included.
            </Typography>
            <Typography component="li">
              Express flower delivery is available within the city from 1 hour, and outside the city
              from 2 hours.
            </Typography>
            <Typography component="li">
              Before each delivery, you will receive a video confirmation of your order from us.
            </Typography>
          </List>
        </Box>
      </AccordionDetails>
    </ProductAccordionItem>
  );
}
