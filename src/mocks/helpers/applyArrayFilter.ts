export function applyArrayFilter<TItem, TValue>(
  items: TItem[],
  values: TValue[],
  getter: (item: TItem) => TValue[] | TValue
) {
  if (!values.length) {
    return items;
  }

  return items.filter((item) => {
    const itemValues = getter(item);

    if (Array.isArray(itemValues)) {
      return values.some((value) => itemValues.includes(value));
    }

    return values.includes(itemValues);
  });
}
