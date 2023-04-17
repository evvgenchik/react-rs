import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from '../utils/types';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ethereal-name-production.up.railway.app',
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<ICard[], string | undefined>({
      query: (name?) => ({
        url: `/books`,
        params: {
          q: name,
        },
      }),
    }),
    getSpecificBook: builder.query<ICard[], string>({
      query: (id) => ({
        url: `/books`,
        params: {
          q: id,
        },
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSpecificBookQuery,
  useLazyGetSpecificBookQuery,
} = booksApi;
