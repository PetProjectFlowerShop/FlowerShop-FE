import { Box, type BoxProps, styled } from '@mui/material';
import { type Theme } from '@mui/material/styles';

const StyledSection = styled(Box)(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(theme.spacingTokens.sectionMobile / 2),
  paddingBottom: theme.spacing(theme.spacingTokens.sectionMobile / 2),

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(theme.spacingTokens.sectionTablet / 2),
    paddingBottom: theme.spacing(theme.spacingTokens.sectionTablet / 2),
  },

  [theme.breakpoints.up('desktop')]: {
    paddingTop: theme.spacing(theme.spacingTokens.sectionDesktop / 2),
    paddingBottom: theme.spacing(theme.spacingTokens.sectionDesktop / 2),
  },
}));

export const CustomSection = (props: BoxProps) => {
  return <StyledSection component="section" {...props} />;
};
