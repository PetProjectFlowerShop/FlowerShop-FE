import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { CustomerDetailsFormValues } from '../components/checkout/schemas/customerDetailsSchema';
import type { ValidDeliveryFormValues } from '../components/checkout/schemas/deliverySchema';

export type CheckoutStep = 1 | 2 | 3;

export type PaymentMethod = 'googlePay' | 'applePay' | 'cash' | 'card';

export interface PaymentDetails {
  paymentMethod: PaymentMethod;
  cardNumber: string;
  expiryDate: string;
}

interface CheckoutState {
  activeStep: CheckoutStep;

  customerDetails: CustomerDetailsFormValues | null;
  deliveryDetails: ValidDeliveryFormValues | null;
  paymentDetails: PaymentDetails | null;

  saveCustomerDetails: (data: CustomerDetailsFormValues) => void;
  saveDeliveryDetails: (data: ValidDeliveryFormValues) => void;
  savePaymentDetails: (data: PaymentDetails) => void;

  savePaymentMethod: (paymentMethod: PaymentMethod) => void;

  setActiveStep: (step: CheckoutStep) => void;
  resetCheckout: () => void;
}

const initialState = {
  activeStep: 1 as CheckoutStep,
  customerDetails: null,
  deliveryDetails: null,
  paymentDetails: null,
};

export const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set) => ({
      ...initialState,

      saveCustomerDetails: (data) => set({ customerDetails: data }),

      saveDeliveryDetails: (data) => set({ deliveryDetails: data }),

      savePaymentDetails: (data) => set({ paymentDetails: data }),

      savePaymentMethod: (paymentMethod) =>
        set((state) => ({
          paymentDetails: {
            paymentMethod,
            cardNumber: paymentMethod === 'card' ? (state.paymentDetails?.cardNumber ?? '') : '',
            expiryDate: paymentMethod === 'card' ? (state.paymentDetails?.expiryDate ?? '') : '',
          },
        })),

      setActiveStep: (step) => set({ activeStep: step }),

      resetCheckout: () => set({ ...initialState }),
    }),
    {
      name: 'checkout-storage',
      storage: createJSONStorage(() => sessionStorage),

      partialize: (state) => ({
        activeStep: state.activeStep,
        customerDetails: state.customerDetails,
        deliveryDetails: state.deliveryDetails,
        paymentDetails: state.paymentDetails
          ? {
              paymentMethod: state.paymentDetails.paymentMethod,
              cardNumber: '',
              expiryDate: '',
            }
          : null,
      }),
    }
  )
);
