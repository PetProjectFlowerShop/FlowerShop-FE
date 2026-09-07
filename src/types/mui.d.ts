import '@mui/material/IconButton';

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'default' | 'primary' | 'secondary' | 'filled';
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body: true;
    body1: false;
    body2: false;
    bodyFixed: true;
    h2Fixed: true;
    h3Fixed: true;
    h4Fixed: true;
    caption2: true;
    captionFixed: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body: React.CSSProperties;
    bodyFixed: React.CSSProperties;
    h2Fixed: React.CSSProperties;
    h3Fixed: React.CSSProperties;
    h4Fixed: React.CSSProperties;
    caption2: React.CSSProperties;
    captionFixed: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body: React.CSSProperties;
    bodyFixed: React.CSSProperties;
    h2Fixed: React.CSSProperties;
    h3Fixed: React.CSSProperties;
    h4Fixed: React.CSSProperties;
    caption2: React.CSSProperties;
    captionFixed: React.CSSProperties;
  }

  interface Palette {
    olive: Palette['primary'];
  }

  interface PaletteOptions {
    olive?: PaletteOptions['primary'];
  }
}
