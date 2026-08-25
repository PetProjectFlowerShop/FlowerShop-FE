import heroImage from '@/assets/images/contacts/hero-contacts-page.webp';
import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import TitleWithImageSection from '@/components/common/TitleWithImageSection';
import { ContactsAddress } from '@/components/contacts/ContactsAddress';
import { ContactsSection } from '@/components/contacts/ContactsSection';
import { PageLayout } from '@/components/layouts/PageLayout';
import { QuestionsCallBlock } from '@/components/QuestionsCallBlock/QuestionsCallBlock';

export function Contacts() {
  return (
    <>
      <DynamicBreadcrumbs mb={{ xs: 2 }} />
      <PageLayout>
        <TitleWithImageSection title="Contacts" imageSrc={heroImage} imageAlt="Bouquet" />
        <ContactsSection />
        <ContactsAddress />
        <QuestionsCallBlock />
      </PageLayout>
    </>
  );
}
