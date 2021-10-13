import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import style from './index.css';

class App extends Component {
  state = {
    contacts: [
      // { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      // { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      // { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      // { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  isContactExist = contactName =>
    this.state.contacts.some(contact => contact.name.toLowerCase() === contactName.toLowerCase());

  addNewContact = newContact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { id: uuidv4(), ...newContact }] };
    });
  };

  setFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

  deleteContact = e => {
    console.log(e.target.id);
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== e.target.id),
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <>
        <div className={'bgImg'}>
          <h1>Phonebook</h1>
          <ContactForm addNewContact={this.addNewContact} isContactExist={this.isContactExist} />
          <h2>Contacts </h2>
          <Filter value={this.state.filter} onChange={this.setFilter} />
          <ContactList contacts={this.filteredContacts()} deleteContact={this.deleteContact} />
        </div>
      </>
    );
  }
}

export default App;
