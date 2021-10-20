import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/actions';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const onDeleteBtn = id => dispatch(deleteContact(id));

  const filteredContacts = (contacts, filter) => {
    console.log(contacts);
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const filterContacts = filteredContacts(contacts, filter);

  return (
    <ul className={style.contactsList}>
      {filterContacts.map(contact => (
        <li className={style.contactsItem} key={contact.id}>
          <p>{contact.name + ': ' + contact.number}</p>
          <button
            className={style.contactsDeleteBtn}
            id={contact.id}
            type="button"
            onClick={e => onDeleteBtn(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteBtn: PropTypes.func,
};
export default ContactList;
