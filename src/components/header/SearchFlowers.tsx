import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Icon } from '../common/Icon';
import { type Theme } from '@mui/material/styles';
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
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                mr: (theme) => theme.spacing(theme.spacingTokens.microX),
              }}
            >
              <Icon name="search" width={28} height={24} />
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
      sx={(theme: Theme) => ({
        gap: 2,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'action.active',
        },
        '& .MuiOutlinedInput-root': {
          height: 56,
          px: theme.spacing(theme.spacingTokens.stackXs),
        },
        '& .MuiOutlinedInput-input': {
          ...theme.typography.caption,
          '&::placeholder': {
            p: 0,
            color: theme.palette.text.disabled,
            opacity: 1,
          },
        },
      })}
    ></TextField>
  );
}
