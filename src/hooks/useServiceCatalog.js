import { useMemo } from 'react';
import { useLocale } from './useLocale';
import { useGetServiceCatalogQuery } from '../redux/api/servicesApi';
import { STATIC_QUERY_OPTIONS } from '../redux/liveQueryOptions';
import {
  findCatalogCategory,
  findCatalogItem,
  getLocalServiceCatalog,
  normalizeServiceCatalog,
} from '../utils/serviceCatalog';

export function useServiceCatalog(queryOptions = STATIC_QUERY_OPTIONS) {
  const { lang } = useLocale();
  const query = useGetServiceCatalogQuery(lang, queryOptions);

  const remoteCatalog = useMemo(
    () => normalizeServiceCatalog(query.data),
    [query.data],
  );

  const localCatalog = useMemo(() => getLocalServiceCatalog(), []);

  const catalog = remoteCatalog.length > 0 ? remoteCatalog : localCatalog;
  const usingFallback = remoteCatalog.length === 0;

  return {
    ...query,
    lang,
    catalog,
    usingFallback,
    isReady: remoteCatalog.length > 0 || query.isError || (!query.isLoading && !query.isFetching),
    getCategory: (slug) => findCatalogCategory(catalog, slug),
    getItem: (slug) => findCatalogItem(catalog, slug),
  };
}
