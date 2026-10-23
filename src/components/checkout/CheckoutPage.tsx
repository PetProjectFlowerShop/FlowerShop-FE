import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

import { CheckoutSection } from './components/CheckoutSection';
import { CustomerDetailsForm } from './components/CustomerDetailsForm';
import { DeliveryForm } from './components/DeliveryForm';

import { PaymentForm } from './components/PaymentForm';
import { type PaymentFormValues } from './schemas/paymentSchema';
import { useCheckoutStore } from './store/checkout.store';

import { CustomerDetailsSummary } from './components/CustomerDetailsSummary';
import { DeliveryFormSummary } from './components/DeliveryFormSummary';

type CheckoutStep = 1 | 2 | 3;

export function CheckoutPage() {
  const activeStep = useCheckoutStore((state) => state.activeStep);
  const setActiveStep = useCheckoutStore((state) => state.setActiveStep);

  const customerDetails = useCheckoutStore((state) => state.customerDetails);
  const deliveryDetails = useCheckoutStore((state) => state.deliveryDetails);

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleEditStep = (step: CheckoutStep) => {
    setActiveStep(step);
  };

  const [isPaymentValid, setIsPaymentValid] = useState(false);

  const handlePlaceOrder = (payment: PaymentFormValues) => {
    console.log('Форма оплати заповнена успішно!');
    console.log('Обраний спосіб оплати:', payment.paymentMethod);

    setPaymentCompleted(true);
  };

  // const handlePlaceOrder = async (payment: PaymentFormValues) => {
  //   try {
  //     // 1. Надіслати дані замовлення на сервер.
  //     // 2. Дочекатися успішної відповіді.

  //     // 3. Очистити CheckoutStore.
  //     resetCheckout();

  //     // 4. Перейти на сторінку успішного оформлення.
  //   } catch (error) {
  //     // Показати помилку.
  //     // Не очищувати CheckoutStore, щоб користувач не втратив введені дані.
  //   }
  // };

  const savePaymentDetails = useCheckoutStore((state) => state.savePaymentDetails);

  const handlePaymentValid = (data: PaymentFormValues) => {
    if (!data.paymentMethod) return;

    savePaymentDetails({
      paymentMethod: data.paymentMethod,
      cardNumber: data.paymentMethod === 'card' ? data.cardNumber : '',
      expiryDate: data.paymentMethod === 'card' ? data.expiryDate : '',
    });

    handlePlaceOrder(data);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', desktop: 'row' },
          gap: 6,
          maxWidth: '100%',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', desktop: '746px' },
            flexShrink: 0,
          }}
        >
          <CheckoutSection
            step={1}
            title="Customer Details"
            activeStep={activeStep}
            completed={!!customerDetails}
            onEdit={handleEditStep}
            summary={<CustomerDetailsSummary />}
          >
            <CustomerDetailsForm />
          </CheckoutSection>

          <CheckoutSection
            step={2}
            title="Delivery"
            activeStep={activeStep}
            completed={!!deliveryDetails}
            onEdit={handleEditStep}
            summary={<DeliveryFormSummary />}
          >
            <DeliveryForm />
          </CheckoutSection>

          <CheckoutSection
            step={3}
            title="Payment"
            activeStep={activeStep}
            completed={paymentCompleted}
            onEdit={handleEditStep}
          >
            <PaymentForm onPaymentValid={handlePaymentValid} onValidityChange={setIsPaymentValid} />
          </CheckoutSection>
        </Box>

        <Box sx={{ flexGrow: 1, width: '100%' }}>
          <Typography component="div" variant="body" mb={6} sx={{ color: 'text.secondary' }}>
            By clicking Submit, I agree to{' '}
            <Typography sx={{ fontWeight: '500' }}>the Terms of Service</Typography> and{' '}
            <Typography sx={{ fontWeight: '500' }}>Privacy Policy</Typography>
          </Typography>
          <Button
            type="submit"
            form="payment-form"
            variant="contained"
            color="primary"
            fullWidth
            disabled={activeStep !== 3 || !isPaymentValid}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
