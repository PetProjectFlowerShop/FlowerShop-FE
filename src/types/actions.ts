import type { IconName } from '../components/common/Icon';

export type UserActionType = 'auth' | 'favorite' | 'cart';

export interface UserAction {
  type: UserActionType;
  label: string;
  icon: IconName;
  width: number;
  height: number;
}
