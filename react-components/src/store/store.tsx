import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import { booksApi } from '../API/BooksServise';

const store = configureStore({
  reducer: {
    search: searchSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
