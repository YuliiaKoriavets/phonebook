import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

addContactHandler = ({name, number}) => {
const {contacts} = this.state
const newContact = {id: nanoid(), name, number}

this.setState(({contacts}) => ({
  contacts: [newContact, ...contacts]
}))
}

deleteContactHandler = () => {

}

  render() {
    return (
      <section>
        <div>
          <h2>Phonebook</h2>
          <Form onSubmit={this.addContactHandler} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactList contacts={this.state.contacts}/>
        </div>
      </section>
    );
  }
}
