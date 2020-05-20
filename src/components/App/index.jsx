import React, { Component } from 'react';
import ContactForm from './contactForm/index';
import Filter from './Filter/index';
import ContactList from './contactList/index';
import { v4 } from 'uuid';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  static propTypes = {};

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  toAddContact = state => {
    const contactToAdd = {
      ...state,
      id: v4(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactToAdd],
    }));
  };

  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm contactToAdd={this.toAddContact} />
        <h2>Contacts</h2>
        <Filter
          filterValue={filter}
          contactList={contacts}
          onChangeFilter={this.changeFilter}
        />

        {contacts.length > 0 && (
          <ContactList
            onHandleDeleteContact={this.handleDeleteContact}
            onFilteredContacts={filteredContacts}
          />
        )}
      </>
    );
  }
}
