import { Typography, Button } from '@mui/material';
import { ProfileLayout } from '@/components/userProfile/ProfileLayout';

export function Favorites() {
  return (
    <ProfileLayout>
      <Typography variant="h4">Favorites</Typography>
      {/* favorites */}

      <Button variant="contained">Add to cart</Button>
    </ProfileLayout>
  );
}
