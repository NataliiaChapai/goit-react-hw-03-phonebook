import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
  contacts: [],
  filter: '',
}
  handleSubmit = (formData) => {
    if (this.state.contacts.find(contact => contact.name === formData.name)) {
      return alert(`${formData.name} is already in contacts`);
    }
    let id = nanoid();
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, {...formData, id}],
    }));
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteItem = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId)
    }))
  }

  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  render() {
    const filter = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
    return (
      <div style={{ alignItems: 'center', padding: '50px' }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit}/>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onFilterInput={this.handleFilter} />
        <ContactList formData={filter} onDeleteBtnClick={this.handleDeleteItem}/>
      </div>
    );
  }
}

export default App;