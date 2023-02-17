import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Typography, Button } from '@mui/material';

export default function UserMenu() {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  return (
    <>
      <Typography textAlign="center" mr={10}>
        {email}
      </Typography>
      <Button color="inherit" type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </>
  );
}
