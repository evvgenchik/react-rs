import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from '../utils/types';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
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

export const { useGetAllBooksQuery, useGetSpecificBookQuery } = booksApi;
