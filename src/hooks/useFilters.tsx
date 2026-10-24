import { parseCatalogFilters } from '@/utils/parseCatalogParams';
import { useSearchParams } from 'react-router-dom';

export function useFilters() {
  const [searchParams] = useSearchParams();

  const filters = parseCatalogFilters(searchParams).filters;

  return filters;
}
