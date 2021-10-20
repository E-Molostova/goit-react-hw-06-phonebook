import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/actions';
import style from './Filte.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(filterContact(e.target.value));
  return (
    <div className={style.divFilter}>
      <label className={style.inputLabel}>
        Find contacts by name
        <input
          className={style.inputFilter}
          type="text"
          value={filter}
          name="search"
          onChange={handleChangeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
