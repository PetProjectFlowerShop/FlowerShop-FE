import { PostContentSection } from '@/components/blog/PostContentSection';
import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import TitleWithImageSection from '@/components/common/TitleWithImageSection';
import { PageLayout } from '@/components/layouts/PageLayout';
import { postsData } from '@/components/blog/data/postsData';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { BlogFlowersGallerySection } from '@/components/blog/BlogFlowersGallerySection';

export function PostPage() {
  const { id } = useParams<{ id: string }>();

  const currentPost = postsData.find((post) => post.id === Number(id));

  if (!currentPost) {
    return (
      <PageLayout>
        <Typography variant="h4" textAlign="center" mt={10}>
          Post not found
        </Typography>
      </PageLayout>
    );
  }

  return (
    <>
      <DynamicBreadcrumbs
        customLastStep={currentPost?.title}
        mb={{ xs: 7, tablet: 2, desktop: 2 }}
      />
      <PageLayout>
        <TitleWithImageSection
          title={currentPost?.title || 'Post'}
          imageSrc={currentPost?.imgURL}
          imageAlt="blog"
          imageObjectPosition={'0 54%'}
          subMenu={true}
          date={currentPost.publishedDate}
        />

        <PostContentSection posts={currentPost.sections} />
        <BlogFlowersGallerySection
          title={'Discover More Stories'}
          shotPreview={true}
          currentPostId={currentPost.id}
        />
      </PageLayout>
    </>
  );
}
