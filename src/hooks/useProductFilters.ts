import { useSearchParams } from 'react-router-dom';
import { parseProductFilters } from '../utils/productFilters';
import type { FilterKey } from '../types/filter';

export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = parseProductFilters(searchParams);

  const toggleParam = (paramKey: FilterKey, value: string) => {
    const values = new Set(searchParams.get(paramKey)?.split(',') ?? []);

    if (values.has(value)) {
      values.delete(value);
    } else {
      values.add(value);
    }

    const newParams = new URLSearchParams(searchParams);
    const updatedValues = Array.from(values);

    if (updatedValues.length) {
      newParams.set(paramKey, updatedValues.join(','));
    } else {
      newParams.delete(paramKey);
    }

    setSearchParams(newParams);
  };

  const setRange = (
    minKey: string,
    maxKey: string,
    min: number,
    max: number,
    defaultMin: number,
    defaultMax: number
  ) => {
    const newParams = new URLSearchParams(searchParams);

    if (min === defaultMin) {
      newParams.delete(minKey);
    } else {
      newParams.set(minKey, String(min));
    }

    if (max === defaultMax) {
      newParams.delete(maxKey);
    } else {
      newParams.set(maxKey, String(max));
    }

    setSearchParams(newParams);
  };

  const removeParamValue = (paramKey: FilterKey, value: string) => {
    const values = new Set(searchParams.get(paramKey)?.split(',') ?? []);

    values.delete(value);

    const newParams = new URLSearchParams(searchParams);

    const updatedValues = Array.from(values);

    if (updatedValues.length) {
      newParams.set(paramKey, updatedValues.join(','));
    } else {
      newParams.delete(paramKey);
    }

    setSearchParams(newParams);
  };

  const removeRange = (minKey: string, maxKey: string) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete(minKey);
    newParams.delete(maxKey);

    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return {
    filters,
    toggleParam,
    setRange,
    removeParamValue,
    clearFilters,
    removeRange,
  };
}
