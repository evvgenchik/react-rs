import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import { booksApi } from '../API/BooksServise';
import myBooksReducer from './myBooksSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  myBooks: myBooksReducer,
  [booksApi.reducerPath]: booksApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(booksApi.middleware),
  });
};

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
