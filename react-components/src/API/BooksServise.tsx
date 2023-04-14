import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from '../utils/types';

// Define a service using a base URL and expected endpoints
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
      query: (name) => ({
        url: `/books`,
        params: {
          q: name,
        },
      }),
    }),
  }),
});

export const { useGetAllBooksQuery, useLazyGetSpecificBookQuery } = booksApi;

export default class BooksServise {
  static url = 'http://localhost:3333/books';

  static async getAll() {
    const res = await fetch(this.url);
    if (res.status !== 200) throw new Error(`Status code error: ${res.status}`);
    const jsonData: ICard[] = await res.json();
    return jsonData;
  }

  static async getSpecific(param: string) {
    const res = await fetch(`${this.url}?q=${param}`);
    if (res.status !== 200) throw new Error(`Status code error: ${res.status}`);
    const jsonData: ICard[] = await res.json();
    return jsonData;
  }
}
