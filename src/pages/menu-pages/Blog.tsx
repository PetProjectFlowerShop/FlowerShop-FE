import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import { PageLayout } from '@/components/layouts/PageLayout';
import TitleWithImageSection from '@/components/common/TitleWithImageSection';
import main from './../../assets/images/blog/main-blog.webp';
import { BlogFlowersGallerySection } from '@/components/blog/BlogFlowersGallerySection';
import { HelpfulTipsSection } from '@/components/blog/HelpfulTipsSection';

export function Blog() {
  return (
    <>
      <DynamicBreadcrumbs mb={{ xs: 2 }} />
      <PageLayout>
        <TitleWithImageSection
          title="Blog"
          imageSrc={main}
          imageAlt="blog"
          imageObjectPosition={'0 50%'}
        />
        <HelpfulTipsSection />
        <BlogFlowersGallerySection />
      </PageLayout>
    </>
  );
}
