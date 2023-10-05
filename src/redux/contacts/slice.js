import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/initialState';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const reducerContacts = contactSlice.reducer;
export const { createContact, deleteContact } = contactSlice.actions;
