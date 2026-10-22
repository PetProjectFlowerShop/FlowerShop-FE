export const getArrayParam = (params: URLSearchParams, key: string): string[] => {
  const value = params.get(key);
  if (!value) return [];

  return value.split(',').map((v) => v.trim());
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
