import { Typography } from '@mui/material';
import { PageContainer } from '../components/common/PageContainer';
import { useParams } from 'react-router-dom';

export function ProductPage() {
  const { id } = useParams();
  if (!id) return <div>No product</div>;
  return (
    <PageContainer>
      <Typography variant="h4">ProductPage</Typography>
      <Typography>ID: {id}</Typography>
    </PageContainer>
  );
}
