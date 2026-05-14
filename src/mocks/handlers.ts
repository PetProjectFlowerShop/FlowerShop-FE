import { http, HttpResponse } from 'msw';
import { parseProductFilters } from '../utils/productFilters';
import { products } from './products';
import { applyArrayFilter } from './helpers/applyArrayFilter';
import { productSorters } from './helpers/productSorters';
import { matchesNumberStem } from './helpers/matchesNumberStem';

export const handlers = [
  http.get('*/api/products', ({ request }) => {
    const url = new URL(request.url);
    console.log(request.url);
    const {
      type,
      color,
      bouquetType,
      occasion,
      sort,
      priceMin,
      priceMax,
      numberStems,
      heightMin,
      heightMax,
    } = parseProductFilters(url.searchParams);
    console.log('numberstems', numberStems);
    let filtered = [...products];
    const sorter = productSorters[sort];

    if (sorter) {
      filtered.sort(sorter);
    }

    filtered = applyArrayFilter(filtered, type, (p) => p.type);

    filtered = applyArrayFilter(filtered, color, (p) => p.color);

    filtered = applyArrayFilter(filtered, bouquetType, (p) => p.bouquetType);

    filtered = applyArrayFilter(filtered, occasion, (p) => p.occasion);

    if (priceMin !== undefined) {
      filtered = filtered.filter((p) => p.price >= priceMin);
    }

    if (priceMax !== undefined) {
      filtered = filtered.filter((p) => p.price <= priceMax);
    }

    if (numberStems?.length) {
      filtered = filtered.filter((p) => {
        console.log('numberstems', numberStems);
        console.log('numberstems p', p.numberStems);
        console.log('numberstems m', matchesNumberStem(p.numberStems, numberStems[0]));
        return numberStems.some((range) => matchesNumberStem(p.numberStems, range));
      });
    }

    if (heightMin !== undefined) {
      filtered = filtered.filter((p) => p.height >= heightMin);
    }

    if (heightMax !== undefined) {
      filtered = filtered.filter((p) => p.height <= heightMax);
    }

    return HttpResponse.json(filtered);
  }),
];
