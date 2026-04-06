import { IconName } from '../components/common/Icon';

export interface ContactsData {
  label: string;
  icon: IconName;
  value: string;
  href?: string;
  iconSize?: number;
}
