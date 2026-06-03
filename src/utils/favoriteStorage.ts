const STORAGE_KEY = 'favorites';

export function getFavorites(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return [];

    const parsed = JSON.parse(data);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(productId: string): string[] {
  const favorites = getFavorites();

  const next = favorites.includes(productId)
    ? favorites.filter((id) => id !== productId)
    : [...favorites, productId];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

  return next;
}
