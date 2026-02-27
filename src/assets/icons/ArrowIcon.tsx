import { SvgIcon, type SvgIconProps } from '@mui/material';
import { Icon } from '../../components/common/Icon';

export function MyCustomArrow(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <Icon name="arrow" />
    </SvgIcon>
  );
}
