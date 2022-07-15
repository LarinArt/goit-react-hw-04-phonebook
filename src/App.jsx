import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactsForm from './components/ContactsForm/ContactsForm';
import { Filter } from './components/Filter/Filter';
import { Message } from './components/Message/Message';
import { Container } from './components/ui/Container';
import { Button, MainTitle, SecondTitle, Section } from './components/ui';
import Contacts from 'components/Contacts/Contacts';
import Modal from 'components/Modal/Modal';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    parsedContacts ? setContacts(parsedContacts) : setContacts([]);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : setContacts(prevContacts => [newContact, ...prevContacts]);

    toggleModal();
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  return (
    <Container>
      <Section>
        <MainTitle>Phonebook</MainTitle>
        <Button type="button" onClick={toggleModal}>
          Add new contact
        </Button>

        {showModal && (
          <Modal onClose={toggleModal} title="Add contact">
            <ContactsForm onSubmit={addContact} />
          </Modal>
        )}

        <SecondTitle>Contacts</SecondTitle>
        <Filter filter={filter} changeFilter={changeFilter} />
        {contacts.length > 0 ? (
          <Contacts
            contacts={filtredContacts()}
            onDeleteContact={deleteContact}
          />
        ) : (
          <Message text="Contact list is empty." />
        )}
      </Section>
    </Container>
  );
}

export default App;
