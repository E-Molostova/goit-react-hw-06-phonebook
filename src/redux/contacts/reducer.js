import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { defaultContacts } from '../../Components/defaultContacts/DefaultContacts';
import { filterContact, addContact, deleteContact } from './actions';

const contactsReducer = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts,
  {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) =>
      state.filter(contact => {
        return contact.id !== payload;
      }),
  },
);

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
