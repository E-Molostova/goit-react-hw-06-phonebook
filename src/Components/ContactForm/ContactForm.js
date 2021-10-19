import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [contactName, setName] = useState('');
  const [contactNumber, setNumber] = useState('');
  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleAddContacts = (contactName, contactNumber) =>
    dispatch(addContact(contactName, contactNumber));

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'contactName':
        setName(value);
        break;

      case 'contactNumber':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const isContactExist = () => {
    contacts.some(contact => contact.contactName.toLowerCase() === contactName.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isContactExist(contactName)) {
      alert(`${contactName} is already in contacts!`);
    } else {
      handleAddContacts(contactName, contactNumber);
      reset();
    }
  };

  return (
    <form className={style.formContact} onSubmit={handleSubmit}>
      <label className={style.inputLabel}>
        Name
        <input
          type="text"
          name="contactName"
          onChange={handleChange}
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={style.contactInput}
        />
      </label>
      <label className={style.inputLabel}>
        Number
        <input
          type="tel"
          name="contactNumber"
          onChange={handleChange}
          value={contactNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={style.contactInput}
        />
      </label>
      <button className={style.buttonInput} type="submit">
        Add contact
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = { addContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
