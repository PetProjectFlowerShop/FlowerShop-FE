import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type RecentlyViewedState = {
  items: string[];
  addProduct: (id: string) => void;
  clear: () => void;
};

export const useRecentlyStore = create<RecentlyViewedState>()(
  persist(
    (set) => ({
      items: [],

      addProduct: (id) =>
        set((state) => {
          const filteredItems = state.items.filter((itemId) => itemId !== id);

          return { items: [id, ...filteredItems].slice(0, 12) };
        }),

      clear: () => set({ items: [] }),
    }),
    {
      name: 'recently-viewed-storage',
    }
  )
);
