import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SearchState = {
  value: string;
};

const initialState: SearchState = {
  value: '',
};

const counterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { addSearchValue } = counterSlice.actions;

export default counterSlice.reducer;
