import React, { Component } from 'react';
import propTypes from 'prop-types';
import { v4 } from 'uuid';

const id = v4();
export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({
      [name]: value,
    });

  handleClick = () =>
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { number: this.state.number, name: this.state.name, id: id },
      ],
    }));

  handleFindContact = () =>
    this.state.contacts.filter(contact => (contact.name = this.state.filter));

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="button" onClick={this.handleClick}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contact by name
          <input
            type="text"
            name="name"
            value={filter}
            // onChange={contacts.length > 2 && this.handleFindContact}
          />
        </label>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
