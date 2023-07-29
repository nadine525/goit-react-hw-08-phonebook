import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Division } from './Contacts.styled';

const Contacts = () => {
  return (
    <Division>
      <ContactForm />
      <Filter />
      <ContactList />
    </Division>
  );
};

export default Contacts;
