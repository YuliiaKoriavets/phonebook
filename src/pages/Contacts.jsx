import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Loader from 'components/Loader/Loader';
import ContactList from 'components/ContactList';
import { Container, Typography } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Typography component="h1" variant="h4" align="center" mt={10}>
        Phonebook
      </Typography>
      <ContactForm />
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </Container>
  );
}
