import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/contactsSlice';
import css from '../Filter/Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  let filterInputId = nanoid();
  return (
    <label className={css.label} htmlFor={filterInputId}>
      {' '}
      Find contacts by name
      <input
        className={css.input}
        id={filterInputId}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
}
