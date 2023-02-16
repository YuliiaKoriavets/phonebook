import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <header>
      <NavLink key="home" to="/" end>Home</NavLink>
      <NavLink key="contacts" to="/contacts">Contacts</NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
