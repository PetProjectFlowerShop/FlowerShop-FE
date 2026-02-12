import { createContext } from "react";

export type NotificationContextValue = {
  showError: (message: string) => void;
};

export const NotificationContext = createContext<NotificationContextValue | null>(null);
