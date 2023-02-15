import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export default function UserMenu() {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  return (
    <div>
      <title>Logout</title>

      <p>{email}</p>
      <button 
        type="button" 
        onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
}
