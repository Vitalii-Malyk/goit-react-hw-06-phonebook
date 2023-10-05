import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const reducerFilter = filterSlice.reducer;
export const { filterContact } = filterSlice.actions;
