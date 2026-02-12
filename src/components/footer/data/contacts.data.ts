export type ContactsData = {
  label: string;
  icon: string;
  value: string;
  href?: string;
  iconSize?: number;
};

export const contacts: ContactsData[] = [
  {
    label: 'Phone',
    icon: '/images/contact-img/contact-phone.svg',
    value: '+38 (0XX) XXX XX XX',
    href: 'tel:+380XXXXXXXXX',
    iconSize: 24,
  },
  {
    label: 'Email',
    icon: '/images/contact-img/email.svg',
    value: 'hello@[yourdomain].com',
    href: 'mailto:hello@yourdomain.com',
    iconSize: 26,
  },
  {
    label: 'Address',
    icon: '/images/contact-img/location.svg',
    value: 'Address: [Your Shop Address]',
    href: 'Address: [Your Shop Address]',
  },
  {
    label: 'Working hours',
    icon: '/images/contact-img/clock.svg',
    value: 'Mon – Sun: 8:00 AM – 10:00 PM',
  },
];
