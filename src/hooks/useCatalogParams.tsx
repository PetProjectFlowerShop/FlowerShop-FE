import type { RangeFilterKey } from '@/config/filterConfig';
import { capitalize } from '@/utils/capitalize';
import { getArrayParam } from '@/utils/searchParams';
import { useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useCatalogParams() {
  const [, setSearchParams] = useSearchParams();

  const setterRef = useRef(setSearchParams);

  useEffect(() => {
    setterRef.current = setSearchParams;
  }, [setSearchParams]);

  const toggleParam = useCallback((paramKey: string, value: string) => {
    setterRef.current((currentParams) => {
      const newParams = new URLSearchParams(currentParams);
      const values = new Set(getArrayParam(newParams, paramKey));

      if (values.has(value)) {
        values.delete(value);
      } else {
        values.add(value);
      }

      if (values.size > 0) {
        newParams.set(paramKey, Array.from(values).join(','));
      } else {
        newParams.delete(paramKey);
      }

      newParams.set('page', '1');

      return newParams;
    });
  }, []);

  const setRangeParam = useCallback(
    (paramKey: RangeFilterKey, min: number, max: number, minLimit: number, maxLimit: number) => {
      setterRef.current((currentParams) => {
        const newParams = new URLSearchParams(currentParams);
        const key = capitalize(paramKey);

        if (min === minLimit) {
          newParams.delete(`min${key}`);
        } else {
          newParams.set(`min${key}`, String(min));
        }

        if (max === maxLimit) {
          newParams.delete(`max${key}`);
        } else {
          newParams.set(`max${key}`, String(max));
        }

        newParams.set('page', '1');

        return newParams;
      });
    },
    []
  );

  return { toggleParam, setRangeParam };
}
