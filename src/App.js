import Container from 'components/Container';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import './App.css';

function App() {
  return (
    <Container title=''>
      <Section title='Phonebook'>
        <ContactForm />
      </Section>
      <Section title='Contacts'>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

export default App;
