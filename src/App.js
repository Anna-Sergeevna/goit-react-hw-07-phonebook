import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Container from 'components/Container';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { getLoading } from './redux/contacts/contacts-selectors';
import Loader from 'components/Loader';
import './App.css';

function App() {
  const isLoadingContacts = useSelector(getLoading);

  return (
    <Container title=''>
      <Section title='Phonebook'>
        <ContactForm />
      </Section>

      {isLoadingContacts && <Loader />}

      <Section title='Contacts'>
        <Filter />
        <ContactList />
      </Section>
      <Toaster position='top-right' />
    </Container>
  );
}

export default App;
