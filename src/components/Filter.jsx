import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { TextField, Box } from '@mui/material';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  let filterInputId = nanoid();
  return (
    <Box maxWidth={400} ml="auto" mr="auto">
      <TextField
        margin="normal"
        fullWidth
        id={filterInputId}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
        label="Please enter contact name"
        variant="standard"
      />
    </Box>
  );
}
