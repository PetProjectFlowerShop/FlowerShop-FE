import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    dividerLight: string;
  }

  interface PaletteOptions {
    dividerLight?: string;
  }
}
