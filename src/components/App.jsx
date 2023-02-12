import Wrapper from './Wrapper/Wrapper';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {

  // const [contacts, setContacts] = useState(()=>
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);


  return (
    <section>
      <Wrapper title="Phonebook">
        <ContactForm />
      </Wrapper>
      <Wrapper title="Contacts">
        <Filter />
        <ContactList/>
      </Wrapper>
    </section>
  );
};
