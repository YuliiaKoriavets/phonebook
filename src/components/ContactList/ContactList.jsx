import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Box mt={5} mb={10}>
      <List
        dense
        sx={{
          width: '100%',
          maxWidth: 480,
          bgcolor: 'background.paper',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id} disablePadding>
            <ListItemAvatar>
              <AccountCircleIcon color="primary" />
            </ListItemAvatar>
            <ListItemText>
              {name}: {number}
            </ListItemText>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
