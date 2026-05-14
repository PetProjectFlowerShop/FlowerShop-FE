export function matchesNumberStem(value: number, range: string) {
  if (range.endsWith('+')) {
    const min = Number(range.replace('+', ''));
    return value >= min;
  }

  const [minStr, maxStr] = range.split('-');
  const min = Number(minStr);
  const max = Number(maxStr);

  return value >= min && value <= max;
}
