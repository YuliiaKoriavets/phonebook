import { Component } from 'react';
import { nanoid } from 'nanoid';
import Wrapper from './Wrapper/Wrapper';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContactHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    const findName = contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

    if (findName) {
      alert(` ${findName.name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  };

  changeContactFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContactHandler = (contactId) => {
    this.setState(prevSate => ({
      contacts: prevSate.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.filterContacts();

    return (
      <section>
        <Wrapper title="Phonebook">
          <ContactForm onSubmit={this.addContactHandler} />
        </Wrapper>
        <Wrapper title="Contacts">
          <Filter value={filter} onChange={this.changeContactFilter} />
          <ContactList
            contacts={filterContacts}
            onDeleteContact={this.deleteContactHandler}
          />
        </Wrapper>
      </section>
    );
  }
}
