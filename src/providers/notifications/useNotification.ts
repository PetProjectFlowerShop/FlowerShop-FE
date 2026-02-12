import { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

export function useNotification() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('useError must be used within ErrorProvider');
  }

  return context;
}
