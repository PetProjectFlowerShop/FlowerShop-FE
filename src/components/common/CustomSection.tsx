import { Box, type BoxProps, styled } from '@mui/material';
import { type Theme } from '@mui/material/styles';

const StyledSection = styled(Box)(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(theme.spacingTokens.sectionMobile),
  paddingBottom: theme.spacing(theme.spacingTokens.sectionMobile),

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(theme.spacingTokens.sectionTablet),
    paddingBottom: theme.spacing(theme.spacingTokens.sectionTablet),
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(theme.spacingTokens.sectionDesktop),
    paddingBottom: theme.spacing(theme.spacingTokens.sectionDesktop),
  },
}));

export const CustomSection = (props: BoxProps) => {
  return <StyledSection component="section" {...props} />;
};
