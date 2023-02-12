import Wrapper from './Wrapper/Wrapper';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  return (
    <section>
      <Wrapper title="Phonebook">
        <ContactForm />
      </Wrapper>
      <Wrapper title="Contacts">
        <Filter />
        <ContactList />
      </Wrapper>
    </section>
  );
};
