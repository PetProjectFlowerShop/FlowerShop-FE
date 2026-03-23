import { Box, Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from './data/menu.data';

type MenuProps = {
  direction?: 'row' | 'column';
  color?: 'light' | 'dark';
};

export function Menu({ direction = 'row', color = 'dark' }: MenuProps) {
  const location = useLocation();
  const isColumn = direction === 'column';

  return (
    <Stack
      component="ul"
      direction={direction}
      alignItems={isColumn ? 'flex-start' : 'center'}
      sx={{
        listStyle: 'none',
        m: 0,
        p: 0,
        gap: (theme) => (isColumn ? theme.spacingTokens.microX : theme.spacingTokens.microX),
      }}
    >
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Box component="li" key={item.path} sx={{ width: isColumn ? '100%' : 'auto' }}>
            <Button
              component={Link}
              to={item.path}
              sx={(theme) => ({
                justifyContent: isColumn ? 'flex-start' : 'center',
                textTransform: 'none',
                height: isColumn ? '52px' : 'auto',
                whiteSpace: 'nowrap',
                padding: 0,
                borderRadius: theme.shape.borderRadius,
                ...theme.typography.button,

                ...(isColumn && {
                  fontWeight: theme.typography.fontWeightRegular,
                  fontSize: '20px',
                  lineHeight: '140%',
                  letterSpacing: '0px',
                }),
                color: isActive
                  ? 'primary.main'
                  : color === 'light'
                    ? 'common.white'
                    : 'text.primary',

                px: isColumn ? '16px' : theme.spacingTokens.micro,
                py: isColumn ? '8px' : theme.spacingTokens.microX,
              })}
            >
              {item.label}
            </Button>
          </Box>
        );
      })}
    </Stack>
  );
}
