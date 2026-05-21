import '@mui/material/IconButton';

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'default' | 'primary' | 'secondary' | 'filled';
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption2: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    caption2?: React.CSSProperties;
  }

  interface Palette {
    olive: Palette['primary'];
  }

  interface PaletteOptions {
    olive?: PaletteOptions['primary'];
  }
}
