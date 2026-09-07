import '@mui/material/IconButton';

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'default' | 'primary' | 'secondary' | 'filled';
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption2: true;
    bodyFixed: true;
    body: true;
    h4Fixed: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption2: React.CSSProperties;
    bodyFixed: React.CSSProperties;
    body: React.CSSProperties;
    h4Fixed: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    caption2?: React.CSSProperties;
    bodyFixed: React.CSSProperties;
    body: React.CSSProperties;
    h4Fixed: React.CSSProperties;
  }

  interface Palette {
    olive: Palette['primary'];
  }

  interface PaletteOptions {
    olive?: PaletteOptions['primary'];
  }
}
