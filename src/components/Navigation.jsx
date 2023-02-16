import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink key="home" to="/" end>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink key="contacts" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
