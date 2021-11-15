import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contacts/addContact', contact => ({
  payload: {
    id: uuidv4(),
    ...contact,
  },
}));
export const deleteContact = createAction('contacts/deleteContact');
export const filterContact = createAction('contacts/filterContact');

// Redux Vanilla
// import types from './contacts-types';
// import { v4 as uuidv4 } from 'uuid';
// export const addContact = contact => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     ...contact,
//   },
// });

// export const deleteContact = todoId => ({
//   type: types.DELETE,
//   payload: todoId,
// });

// export const filterContact = value => ({
//   type: types.FILTER,
//   payload: value,
// });
