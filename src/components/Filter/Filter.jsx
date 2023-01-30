import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css'

export default function Filter({ value, onChange }) {
  let filterInputId = nanoid();
  return (
    <label className={css.label} htmlFor={filterInputId}>
      {' '}
      Find contacts by name
      <input className={css.input} id={filterInputId} type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
