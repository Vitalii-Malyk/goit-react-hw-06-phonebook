import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactSlice = createSlice({
  name: 'contacts',
  contactsInitialState,
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
