import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/contacts-action';
import style from './Filte.module.css';

const Filter = () => {
  const { filter } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className={style.divFilter}>
      <label className={style.inputLabel}>
        Find contacts by name
        <input
          className={style.inputFilter}
          type="text"
          value={filter}
          name="search"
          onChange={e => dispatch(filterContact(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;

// const mapStateToProps = state => ({
//   filter: state.phonebook.filter,
// });
// const mapDispatchToProps = { filterContact };
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
