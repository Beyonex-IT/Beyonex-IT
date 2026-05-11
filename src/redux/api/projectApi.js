import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SYSTEM_API_URL || "https://system.beyonexit.com/api",
  }),
  endpoints: (builder) => ({
    getBranches: builder.query({
      query: (lng) => ({
        url: `/website/1/branches`,
        headers: {
          "Accept-Language": lng || "ar",
          "Accept": "application/json",
        },
      }),
    }),
    registerProject: builder.mutation({
      query: (data) => ({
        url: `/website/1/register`,
        method: "POST",
        body: data,
        headers: {
          "Accept": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetBranchesQuery, useRegisterProjectMutation } = projectApi;
