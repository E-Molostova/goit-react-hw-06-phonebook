import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const deleteContact = createAction('contacts/DeleteContact');
export const filterContact = createAction('contacts/FilterContact');
export const addContact = createAction('contacts/AddContact', ({name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
