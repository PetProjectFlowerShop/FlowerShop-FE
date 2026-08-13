import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    dividerLight: string;
  }

  interface PaletteOptions {
    dividerLight?: string;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    placeholder: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    placeholder?: React.CSSProperties;
  }
}
