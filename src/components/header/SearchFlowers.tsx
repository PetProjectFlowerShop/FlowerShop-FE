import { Box, InputAdornment, InputBase } from '@mui/material';
import { Icon } from '../common/Icon';

export function SearchFlowers() {
  return (
    <Box
      component="form"
      sx={{
        width: 217,
        height: 45,
        border: '1px solid',
        borderColor: 'text.primary',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <InputBase
        placeholder="Search Flowers"
        inputProps={{ 'aria-label': 'Search for flowers' }}
        sx={{
          flex: 1,
          px: 2,
          '& input::placeholder': {
            color: 'text.secondary',
          },
        }}
        endAdornment={
          <InputAdornment position="end" sx={{ pr: 1.5 }}>
            <Icon
              name="search"
              width={24}
              height={24}
              style={{
                color: 'var(--mui-palette-text-primary)',
                fill: 'currentColor',
                display: 'block',
              }}
            />
          </InputAdornment>
        }
      />
    </Box>
  );
}
