import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SearchState = {
  value: string;
};

const initialState: SearchState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { addSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
