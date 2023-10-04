import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 0, name: 'Learn HTML and CSS', tel: 456456456 },
  { id: 1, name: 'Get good at JavaScript', tel: 456456456 },
  { id: 2, name: 'Master React', tel: 456456456 },
  { id: 3, name: 'Discover Redux', tel: 456456456 },
  { id: 4, name: 'Build amazing apps', tel: 456456456 },
];

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const contact of state) {
        if (contact.id === action.payload) {
          contact.completed = !contact.completed;
          break;
        }
      }
    },
  },
});

export const { addContact, deleteContact, toggleCompleted } =
  contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
