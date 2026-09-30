import { FormControl } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { CustomSelect } from '@/components/common/CustomSelect';
import { profileNavigation } from './data/profileNavigation';

export function MobileNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: SelectChangeEvent) => {
    navigate(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <CustomSelect value={location.pathname} options={profileNavigation} onChange={handleChange} />
    </FormControl>
  );
}
