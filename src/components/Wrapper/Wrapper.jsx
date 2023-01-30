import PropTypes from 'prop-types';
import css from '../Wrapper/Wrapper.module.css'

export default function Wrapper({ title, children }) {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  title: PropTypes.string.isRequired,
};
