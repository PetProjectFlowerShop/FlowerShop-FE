import '@mui/material/IconButton';

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'default' | 'primary' | 'secondary' | 'filled';
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption2: true;
    bodyTablet: true;
    bodyMobile: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption2: React.CSSProperties;
    bodyTablet: React.CSSProperties;
    bodyMobile: true;
  }

  interface TypographyVariantsOptions {
    caption2?: React.CSSProperties;
    bodyTablet: React.CSSProperties;
    bodyMobile: true;
  }

  interface Palette {
    olive: Palette['primary'];
  }

  interface PaletteOptions {
    olive?: PaletteOptions['primary'];
  }
}
