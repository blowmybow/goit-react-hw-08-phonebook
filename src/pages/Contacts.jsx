import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';

import { selectContacts, selectIsLoading } from '../redux/selectors';
import Loader from '../components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/operations';
import { ToastContainer } from 'react-toastify';
import Section from 'components/Section/Section';
import Header from 'components/Header/Header';
import Filter from 'components/Filter/Filter';
import { Wrapper } from 'components/App/App.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
        <div>{isLoading && <Loader />}</div>
        <Header title="Contacts" />
        {contacts.length > 0 ? (
          <>
            <Filter />
          </>
        ) : (
          <Wrapper>
            Unfortunately, your phone book is empty. Please add your first
            contact!
          </Wrapper>
        )}
        {contacts.length > 0 && <ContactList />}
      </Section>
      <ToastContainer />
    </>
  );
}
