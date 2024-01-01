import { Container, MainHeader, SubHeader } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <Container>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <SubHeader>Contacts</SubHeader>
      <Filter />
      <ContactList />
    </Container>
  );
};