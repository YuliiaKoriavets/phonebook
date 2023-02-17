import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import css from '../components/NavLink.module.css';

export default function AuthNav() {
  return (
    <Box>
      <Button key="register" sx={{ color: '#fff' }}>
        <NavLink to="/register" className={css.link}>
          Register
        </NavLink>
      </Button>
      <Button key="login" sx={{ color: '#fff' }}>
        <NavLink to="/login" className={css.link}>
          Log In
        </NavLink>
      </Button>
    </Box>
  );
}
