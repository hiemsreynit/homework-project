import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({

  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/"}),
  endpoints: (build) => ({

    // get product
    getProduct: build.query({
      query: () => `products/category/groceries`,
    }),

    // create product
    createProduct: build.mutation({
      query: ({newProduct, accessToken}) => ({
        method: "POST",
        url: "/groceries",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: newProduct,
      })  
    })
  }),
});

export const { 
    useGetProductQuery,
    useCreateProductMutation
} = ecommerceApi;
