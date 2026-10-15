import { PostContentSection } from '@/components/blog/PostContentSection';
import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import TitleWithImageSection from '@/components/common/TitleWithImageSection';
import { PageLayout } from '@/components/layouts/PageLayout';
import main from './../assets/images/blog/main-blog.webp';
import { postsData } from '@/components/blog/data/postsData';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

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
      <DynamicBreadcrumbs customLastStep={currentPost?.title} mb={{ xs: 7, tablet: 10 }} />
      <PageLayout>
        <TitleWithImageSection
          title={currentPost?.title || 'Post'}
          imageSrc={main}
          imageAlt="blog"
          imageObjectPosition={'0 50%'}
        />
        <PostContentSection posts={currentPost.sections} />
      </PageLayout>
    </>
  );
}
