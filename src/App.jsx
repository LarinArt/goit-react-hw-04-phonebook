import React from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactsForm from './components/ContactsForm/ContactsForm';
import { Filter } from './components/Filter/Filter';
import { Message } from './components/Message/Message';
import { Container } from './components/ui/Container';
import { Button, MainTitle, SecondTitle, Section } from './components/ui';
import Contacts from 'components/Contacts/Contacts';
import Modal from 'components/Modal/Modal';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

    if (
      nextContacts.length > prevContacts.length &&
      prevContacts.length !== 0
    ) {
      this.toggleModal();
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, showModal } = this.state;
    const filtredContacts = this.filtredContacts();
    return (
      <Container>
        <Section>
          <MainTitle>Phonebook</MainTitle>
          <Button type="button" onClick={this.toggleModal}>
            Add new contact
          </Button>

          {showModal && (
            <Modal onClose={this.toggleModal} title="Add contact">
              <ContactsForm onSubmit={this.addContact} />
            </Modal>
          )}

          <SecondTitle>Contacts</SecondTitle>
          <Filter filter={filter} changeFilter={this.changeFilter} />
          {this.state.contacts.length > 0 ? (
            <Contacts
              contacts={filtredContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <Message text="Contact list is empty." />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
