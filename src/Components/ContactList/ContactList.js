import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-action';
import style from './ContactList.module.css';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  const getFilteredContacts = (contacts, filter) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul className={style.contactsList}>
      {filteredContacts.map(contact => (
        <li className={style.contactsItem} key={contact.id}>
          <p>{contact.name + ': ' + contact.number}</p>
          <button
            className={style.contactsDeleteBtn}
            id={contact.id}
            type="button"
            onClick={e => dispatch(deleteContact(e.target.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// const mapStateToProps = state => {
//   const { filter, contacts } = state.phonebook;
//   const filteredContacts = getFiltered(contacts, filter);
//   return {
//     contacts: filteredContacts,
//   };
// };
// const mapDispatchToProps = { deleteContact };
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
