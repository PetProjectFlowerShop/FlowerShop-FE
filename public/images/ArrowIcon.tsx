import { SvgIcon, SvgIconProps } from '@mui/material';

export function MyCustomArrow(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" fill="none">
      <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor" />
    </SvgIcon>
  );
}
