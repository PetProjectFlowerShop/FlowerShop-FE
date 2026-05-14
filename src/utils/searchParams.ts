export const getArrayParam = <T extends string>(params: URLSearchParams, key: string): T[] => {
  const value = params.get(key);
  if (!value) return [];

  return value.split(',').map((v) => v.trim()) as T[];
};

export const getNumberParam = (params: URLSearchParams, key: string): number | undefined => {
  const value = params.get(key);
  return value !== null ? Number(value) : undefined;
};

export const getStringParam = <T extends string>(
  params: URLSearchParams,
  key: string,
  fallback: T
): T => {
  const value = params.get(key);
  return (value as T) ?? fallback;
};
