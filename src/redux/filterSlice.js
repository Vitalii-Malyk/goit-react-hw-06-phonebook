// import { createSlice } from '@reduxjs/toolkit';

// const filtersInitialState = '';

// const filtersSlice = createSlice({
//   name: 'filter',
//   initialState: filtersInitialState,
//   reducers: {
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const getFilter = state => state.filter;

// export const { setFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
