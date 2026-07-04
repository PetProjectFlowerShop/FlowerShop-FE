import { ROUTE_NAMES } from '@/constants/rout-names';
import { Breadcrumbs, Link, Typography, type Theme } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Icon } from './Icon';
import { SectionContainer } from '../layouts/SectionContainer';

const getBreadcrumbsStyles = (theme: Theme, mb?: string | number) => ({
  mb: mb ?? theme.spacing(theme.spacingTokens.stackM),
  '& .MuiBreadcrumbs-separator': {
    marginLeft: '2px !important',
    marginRight: '0 !important',
    color: theme.palette.text.disabled,
  },
  '& .MuiBreadcrumbs-li': {
    display: 'flex',
    alignItems: 'center',
  },
});

const getLinkStyles = (theme: Theme) => ({
  ...theme.typography.caption,
  fontWeight: 400,
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    color: theme.palette.primary.main,
  },
});

const getActiveTextStyles = (theme: Theme) => ({
  ...theme.typography.caption,
  fontWeight: 400,
  color: theme.palette.text.primary,
});

interface DynamicBreadcrumbsProps {
  customLastStep?: string;
  mb?: number | string;
}

export const DynamicBreadcrumbs = ({ customLastStep, mb }: DynamicBreadcrumbsProps) => {
  const theme = useTheme();
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <section>
      <SectionContainer>
        <Breadcrumbs
          separator={<Icon name="navigate-next" width={24} height={24} fill="currentColor" />}
          aria-label="breadcrumb"
          sx={getBreadcrumbsStyles(theme, mb)}
        >
          <Link component={RouterLink} to="/" sx={getLinkStyles(theme)}>
            Home
          </Link>

          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            let label = ROUTE_NAMES[value] || value.charAt(0).toUpperCase() + value.slice(1);

            if (isLast && customLastStep) {
              label = customLastStep;
            }

            return isLast ? (
              <Typography key={to} sx={getActiveTextStyles(theme)}>
                {label}
              </Typography>
            ) : (
              <Link component={RouterLink} to={to} key={to} sx={getLinkStyles(theme)}>
                {label}
              </Link>
            );
          })}
        </Breadcrumbs>
      </SectionContainer>
    </section>
  );
};
