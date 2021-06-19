import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

function Contacts() {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default Contacts;
