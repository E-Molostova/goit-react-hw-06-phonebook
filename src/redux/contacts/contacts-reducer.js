import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './contacts-action';
const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => {
      return contact.id !== payload;
    }),
});

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// Redux Vanilla
// import { combineReducers } from 'redux';
// import types from './contacts-types';
// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts,
//   filter,
// });
