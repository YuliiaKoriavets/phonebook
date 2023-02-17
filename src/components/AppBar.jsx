import { useSelector } from 'react-redux';
import {AppBar, Container, Toolbar} from '@mui/material';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function Header() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
     <AppBar position="static">
       <Container maxWidth="xl">
        <Toolbar disableGutters>
      <Navigation/>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
      </Container>
      </AppBar>
  );
}
