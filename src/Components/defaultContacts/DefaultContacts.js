import { v4 as uuidv4 } from 'uuid';

export const defaultContacts = [
  { id: uuidv4(), contactName: 'Rosie Simpson', contactNumber: '459-12-56' },
  { id: uuidv4(), contactName: 'Hermione Kline', contactNumber: '443-89-12' },
  { id: uuidv4(), contactName: 'Eden Clements', contactNumber: '645-17-79' },
  { id: uuidv4(), contactName: 'Annie Copeland', contactNumber: '227-91-26' },
];
