import '@mui/material/IconButton';

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'default' | 'primary' | 'secondary' | 'filled';
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body: true;
    bodyFixed: true;
    h2Fixed: true;
    h4Fixed: true;
    caption2: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body: React.CSSProperties;
    bodyFixed: React.CSSProperties;
    h2Fixed: React.CSSProperties;
    h4Fixed: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body: React.CSSProperties;
    bodyFixed: React.CSSProperties;
    h2Fixed: React.CSSProperties;
    h4Fixed: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface Palette {
    olive: Palette['primary'];
  }

  interface PaletteOptions {
    olive?: PaletteOptions['primary'];
  }
}
