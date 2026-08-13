import type { IconName } from '../components/common/Icon';

export type UserActionType =
  'register' | 'login' | 'password-recovery' | 'check-email' | 'new-password' | 'favorite' | 'cart';

export interface UserAction {
  type: UserActionType;
  label: string;
  icon: IconName;
  width: number;
  height: number;
}
