import type { IconName } from '../../common/Icon';

export type ContactsData = {
  label: string;
  icon: IconName;
  value: string;
  href?: string;
  iconSize?: number;
};

export const contacts: ContactsData[] = [
  {
    label: 'Phone',
    icon: 'call',
    value: '+38 (0XX) XXX XX XX',
    href: 'tel:+380XXXXXXXXX',
    iconSize: 24,
  },
  {
    label: 'Email',
    icon: 'mail',
    value: 'hello@[yourdomain].com',
    href: 'mailto:hello@yourdomain.com',
    iconSize: 26,
  },
  {
    label: 'Address',
    icon: 'location',
    value: 'Address: [Your Shop Address]',
    href: 'Address: [Your Shop Address]',
  },
  {
    label: 'Working hours',
    icon: 'time-watch',
    value: 'Mon – Sun: 8:00 AM – 10:00 PM',
  },
];
