import { PageLayout } from '@/components/layouts/PageLayout';
import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import TitleWithImageSection from '@/components/common/TitleWithImageSection';
import heroImage from '@/assets/images/payment/hero-payment.webp';
import { DeliveryOptions } from '@/components/delivery/DeliveryOptions';
import { ShopNowSection } from '@/components/delivery/ShopNowSection';
import { PaymentOptions } from '@/components/delivery/PaymentOptions';
import { QuestionsCallBlock } from '@/components/QuestionsCallBlock/QuestionsCallBlock';

export function DeliveryAndPayment() {
  return (
    <>
      <DynamicBreadcrumbs mb={2} />
      <PageLayout>
        <TitleWithImageSection
          title="Delivery&Payment"
          imageSrc={heroImage}
          imageAlt="Delivery & Payment"
        />
        <DeliveryOptions />
        <ShopNowSection />
        <PaymentOptions />
        <QuestionsCallBlock />
      </PageLayout>
    </>
  );
}
