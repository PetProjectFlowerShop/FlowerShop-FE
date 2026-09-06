import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import main from './../../assets/images/aboutUs/about-us-main.webp';
import TitleWithImageSection from '@/components/common/TitleWithImageSection';
import { QuestionsCallBlock } from '@/components/QuestionsCallBlock/QuestionsCallBlock';
import { PageLayout } from '@/components/layouts/PageLayout';
import { WelcomeSection } from '@/components/about/WelcomeSection';
import { AdvantageSection } from '@/components/about/AdvantageSection';
import { OurValuesSection } from '@/components/about/OurValuesSection';
import { ProgressSection } from '@/components/about/ProgressSection';
import { TeamSection } from '@/components/about/TeamSection';

export function AboutUs() {
  return (
    <>
      <DynamicBreadcrumbs mb={{ xs: 2 }} />
      <PageLayout>
        <TitleWithImageSection title="About Us" imageSrc={main} imageAlt="shop" />
        <WelcomeSection />
        <AdvantageSection />
        <OurValuesSection />
        <ProgressSection />
        <TeamSection />
        <QuestionsCallBlock />
      </PageLayout>
    </>
  );
}
