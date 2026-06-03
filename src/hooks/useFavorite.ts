import { useEffect, useState } from 'react';
import { getFavorites, toggleFavorite } from '@/utils/favoriteStorage';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => getFavorites());

  useEffect(() => {
    const handler = () => {
      setFavorites(getFavorites());
    };

    window.addEventListener('storage', handler);

    return () => window.removeEventListener('storage', handler);
  }, []);

  const toggle = (productId: string) => {
    const updated = toggleFavorite(productId);
    setFavorites(updated);
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  return {
    favorites,
    toggle,
    isFavorite,
  };
}
