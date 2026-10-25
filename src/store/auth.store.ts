import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'ROLE_USER' | 'ROLE_ADMIN';

interface AuthState {
  token: string | null;
  role: UserRole | null;
  isAuthenticated: boolean;

  login: (token: string, role: UserRole) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      role: null,
      isAuthenticated: false,

      login: (token, role) => {
        set({
          token,
          role,
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({
          token: null,
          role: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
