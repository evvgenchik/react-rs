import {
  fetchBaseQuery,
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from '@reduxjs/toolkit/query/react';

import { ICard } from '../utils/types';

// eslint-disable-next-line @typescript-eslint/no-redeclare
const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333',
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
