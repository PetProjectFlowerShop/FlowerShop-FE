import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Icon } from '../common/Icon';
import { useState } from 'react';

export function SearchFlowers() {
  const [searchValue, setSearchValue] = useState('');

  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <TextField
      placeholder="Search flowers..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      variant="outlined"
      slotProps={{
        input: {
          sx: {
            '& .MuiOutlinedInput-input': {
              paddingRight: 0.5,
              paddingLeft: 2,
            },
          },
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                transform: (theme) => `translateX(${theme.spacing(3)})`,
              }}
            >
              <Icon name="search" width={24} height={24} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {searchValue && (
                <IconButton
                  onClick={handleClear}
                  edge="end"
                  sx={{
                    transform: (theme) => `translateX(${theme.spacing(-3)})`,
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  <Icon name="close" width={24} height={24} />
                </IconButton>
              )}
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
