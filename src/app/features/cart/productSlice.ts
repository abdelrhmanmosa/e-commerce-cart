import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => {
    return {
      getProductList: builder.query({
        query: () => {
          return {
            url: "/products",
          };
        },
      }),
    };
  },
});

// export const { useGetProductListQuery } = productsApiSlice;
export const {useGetProductListQuery} = productsApiSlice
