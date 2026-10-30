import type { PostSection } from '@/types/post';
import { Box } from '@mui/material';
import { SectionContainer } from '../layouts/SectionContainer';
import { PostArticles } from './PostArticles';
import { TableOfContents } from './TableOfContents';

interface PostContentProps {
  posts: PostSection[];
}

export const PostContentSection = ({ posts }: PostContentProps) => {
  return (
    <section data-testid="product-details-section">
      <SectionContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 0, md: 6 },
          }}
        >
          <Box sx={{ flex: '0 0 306px', display: { xs: 'none', desktop: 'block' } }}>
            <TableOfContents sections={posts} />
          </Box>

          <Box
            id="scrollable-content-area"
            sx={{
              flex: 1,
              minWidth: 0,
            }}
          >
            <PostArticles posts={posts} />
          </Box>
        </Box>
      </SectionContainer>
    </section>
  );
};
