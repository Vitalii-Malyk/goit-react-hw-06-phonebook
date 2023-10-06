// import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = '';

// export const filterSlice = createSlice({
//   name: 'filter',
//   filterInitialState,
//   reducers: {
//     filterContact: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
// });

// export const reducerFilter = filterSlice.reducer;
// export const { filterContact } = filterSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
