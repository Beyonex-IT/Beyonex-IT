import { baseApi } from './baseApi';

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServiceCatalog: builder.query({
      query: (lang) => ({
        url: 'service-catalog',
        headers: {
          Accept: 'application/json',
          'Accept-Language': lang,
        },
      }),
    }),
    getServiceCategory: builder.query({
      query: ({ slug, lang }) => ({
        url: `service-categories/${slug}`,
        headers: {
          Accept: 'application/json',
          'Accept-Language': lang,
        },
      }),
    }),
    getServiceOffering: builder.query({
      query: ({ slug, lang }) => ({
        url: `service-offerings/${slug}`,
        headers: {
          Accept: 'application/json',
          'Accept-Language': lang,
        },
      }),
    }),
    /** @deprecated Prefer getServiceCatalog — kept as catalog alias for sync/prefetch. */
    getServices: builder.query({
      query: (lang) => ({
        url: 'service-catalog',
        headers: {
          Accept: 'application/json',
          'Accept-Language': lang,
        },
      }),
    }),
    /** @deprecated Prefer getServiceOffering. */
    getServiceDetails: builder.query({
      query: ({ slug, lang }) => ({
        url: `service-offerings/${slug}`,
        headers: {
          Accept: 'application/json',
          'Accept-Language': lang,
        },
      }),
    }),
  }),
});

export const {
  useGetServiceCatalogQuery,
  useGetServiceCategoryQuery,
  useGetServiceOfferingQuery,
  useGetServicesQuery,
  useGetServiceDetailsQuery,
} = servicesApi;
