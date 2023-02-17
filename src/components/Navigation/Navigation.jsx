import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Typography } from '@mui/material';
import css from '../NavLink.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    isLoggedIn && (
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link key="contacts" to="/contacts" className={css.link}>
          Contacts
        </Link>
      </Typography>
    )
  );
}
