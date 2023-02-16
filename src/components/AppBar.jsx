import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <header>
      <Navigation/>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
