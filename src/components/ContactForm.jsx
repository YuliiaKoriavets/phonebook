import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';
import { Box, TextField, Button } from '@mui/material';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, number };
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (findName) {
      alert(` ${findName.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 1 }}
      border={1}
      maxWidth={480}
      ml="auto"
      mr="auto"
      mb={5}
      borderRadius={2}
      padding={5}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        label="Contact Name"
        autoComplete="email"
        onChange={handleChange}
        autoFocus
        id={nameInputId}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="number"
        label="Phone Number"
        autoComplete="current-password"
        id={numberInputId}
        type="tel"
        value={number}
        onChange={handleChange}
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add contact
      </Button>
    </Box>
  );
}
