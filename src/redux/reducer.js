import { reducerFilter } from 'redux/filter/slice';
import { combineReducers } from '@reduxjs/toolkit';
import { reducerContacts } from './contacts/slice';

export const rootReducer = combineReducers({
  contacts: reducerContacts,
  filter: reducerFilter,
});
