import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import { ContactsItem } from './Contacts.style';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
              contactId={id}
            />
          </ContactsItem>
        );
      })}
    </ul>
  );
};

Contacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
