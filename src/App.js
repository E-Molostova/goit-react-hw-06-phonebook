import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

const App = ({ contacts }) => {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts </h2>
      <Filter />
      <ContactList />
      
    </>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
