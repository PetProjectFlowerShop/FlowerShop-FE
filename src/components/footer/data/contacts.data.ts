import type { ContactsData } from '../../../types/contacts';

export const contacts: ContactsData[] = [
  {
    label: 'Phone',
    icon: 'call',
    value: '0 800 33 44 55',
    href: 'tel:+0 800 33 44 55',
    iconSize: 24,
  },
  {
    label: 'Email',
    icon: 'mail',
    value: 'hello@floria.com.ua',
    href: 'mailto:hello@floria.com.ua',
    iconSize: 26,
  },
  {
    label: 'Address',
    icon: 'location',
    value: '12 Kvitkova St., Kyiv',
    href: 'Address: 12 Kvitkova St., Kyiv',
  },
  {
    label: 'Working hours',
    icon: 'time-watch',
    value: 'Daily: 08:00 – 21:00',
  },
];
