import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  filterInitialState,
  reducers: {
    filterContact: (state, { payload }) => {
      return payload;
    },
  },
});

export const reducerFilter = filterSlice.reducer;
export const { filterContact } = filterSlice.actions;
