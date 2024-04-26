import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,

            }),
            keepUnusedDataFor: 10,
            providesTags: ['Products']
        })
    }),

})

export const { useGetProductsQuery } = productsApiSlice