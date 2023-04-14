import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard } from '../utils/types';

type MyBooksState = {
  books: ICard[];
};

const initialState: MyBooksState = {
  books: [],
};

const myBooksSlice = createSlice({
  name: 'myBooks',
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<ICard>) {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = myBooksSlice.actions;

export default myBooksSlice.reducer;
