import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Wrapper from './Wrapper/Wrapper';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(()=>
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (findName) {
      alert(` ${findName.name} is already in contacts.`);
    } else {
      setContacts([newContact, ...contacts]);
    }
  };

  const changeContactFilter = event => {
    setFilter(event.target.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContactHandler = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <section>
      <Wrapper title="Phonebook">
        <ContactForm onSubmit={addContactHandler} />
      </Wrapper>
      <Wrapper title="Contacts">
        <Filter value={filter} onChange={changeContactFilter} />
        <ContactList
          contacts={filterContacts()}
          onDeleteContact={deleteContactHandler}
        />
      </Wrapper>
    </section>
  );
};
