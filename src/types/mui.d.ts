import '@mui/material/IconButton';

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'default' | 'primary' | 'secondary' | 'filled';
  }
}
