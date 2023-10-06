// import { createSlice } from '@reduxjs/toolkit';

// const contactsInitialState = {
//   contacts: [],
// };

// export const contactSlice = createSlice({
//   name: 'contacts',
//   contactsInitialState,
//   reducers: {
//     createContact: (state, { payload }) => {
//       console.log(state, payload);
//     },
//     deleteContact: (state, { payload }) => {
//       console.log(state, payload);
//     },
//   },
// });

// export const reducerContacts = contactSlice.reducer;
// export const { createContact, deleteContact } = contactSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    createContact(state, { payload }) {
      state.push(payload);
    },
    deleteContact(state, { payload }) {
      const index = state.findIndex(task => task.id === payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
