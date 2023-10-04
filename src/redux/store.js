import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/slice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
