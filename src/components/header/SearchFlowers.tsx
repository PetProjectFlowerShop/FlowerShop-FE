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
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                mr: (theme) => theme.spacingTokens.microX,
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
