import type { IconName } from '../../common/Icon';

type SocialLink = {
  name: string;
  icon: IconName;
  href: string;
};
export const socialLinks: SocialLink[] = [
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
  { name: 'Telegram', icon: 'telegram', href: '#' },
];
