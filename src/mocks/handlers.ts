import { http, HttpResponse } from 'msw';
import { parseProductFilters } from '../utils/productFilters';
import { products } from './products';
import { applyArrayFilter } from './helpers/applyArrayFilter';
import { productSorters } from './helpers/productSorters';
import { matchesNumberStem } from './helpers/matchesNumberStem';

export const handlers = [
  http.get('*/api/products', ({ request }) => {
    const url = new URL(request.url);
    const rawPage = Number(url.searchParams.get('page'));
    const rawLimit = Number(url.searchParams.get('limit'));

    const page = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;
    const limit = Number.isNaN(rawLimit) || rawLimit < 1 ? 12 : rawLimit;
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
        return numberStems.some((range) => matchesNumberStem(p.numberStems, range));
      });
    }

    if (heightMin !== undefined) {
      filtered = filtered.filter((p) => p.height >= heightMin);
    }

    if (heightMax !== undefined) {
      filtered = filtered.filter((p) => p.height <= heightMax);
    }

    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / limit);

    const safePage = Math.min(page, totalPages);

    const start = (page - 1) * limit;
    const end = start + limit;

    const paginatedProducts = filtered.slice(start, end);

    return HttpResponse.json({
      items: paginatedProducts,
      page: safePage,
      limit,
      totalItems,
      totalPages,
    });
  }),
  http.get('*/api/products/by-ids', ({ request }) => {
    const url = new URL(request.url);

    const ids = url.searchParams.get('ids')?.split(',').filter(Boolean).map(String) ?? [];

    const result = ids
      .map((id) => products.find((p) => String(p.id) === String(id)))
      .filter(Boolean);

    return HttpResponse.json(result);
  }),
  http.get('*/api/products/:id', ({ params }) => {
    const { id } = params;

    const product = products.find((p) => String(p.id) === String(id));

    if (!product) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(product);
  }),
];
