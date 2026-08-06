import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoritesState = {
  items: Record<string, true>;
  toggleFavorite: (id: string) => void;
  clear: () => void;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      items: {},

      toggleFavorite: (id) =>
        set((state) => {
          const newItems = { ...state.items };

          if (newItems[id]) {
            delete newItems[id];
          } else {
            newItems[id] = true;
          }

          return { items: newItems };
        }),

      clear: () => set({ items: {} }),
    }),
    {
      name: 'favorites-storage',
    }
  )
);
