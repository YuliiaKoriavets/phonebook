import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { selectIsLoading } from "redux/contacts/contactsSelectors"
import { fetchContacts } from "redux/contacts/contactsOperations"
import Wrapper from "components/Wrapper/Wrapper"
import ContactForm from "components/ContactForm/ContactForm"
import Filter from "components/Filter/Filter"
import Loader from "components/Loader/Loader"
import ContactList from "components/ContactList/ContactList"

export default function Contacts (){
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return(
        <section>
        <Wrapper title="Phonebook">
          <ContactForm />
        </Wrapper>
        <Wrapper title="Contacts">
          <Filter />
          {isLoading && <Loader />}
          <ContactList />
        </Wrapper>
      </section>
    )
}