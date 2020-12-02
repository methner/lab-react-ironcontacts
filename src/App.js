import React from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contactList: contacts.slice(0,5),
  }

  addRandomContact = () => {
    const randomNumber = Math.floor(Math.random() * contacts.length);
    // this.state.contactList.find(contact => contact.id === contacts[randomIndex].id)
    const newContactList = [ ... this.state.contactList, contacts[randomNumber]];
    this.setState({
      contactList: newContactList,
    })
  }

  sortByName = () => {
    const sortedContacts = this.state.contactList.sort((contactA, contactB) => {
      return contactA.name > contactB.name ? 1 : -1;
    })
    this.setState({
      contactList: sortedContacts,
    })
  }

  // sortByPopularity

  removeContact = (index) => {
    const newContactList = this.state.contactList.filter((contact, contactIndex) => {
      return contactIndex !== index
    })
    this.setState({
      contactList: newContactList
    })
  }

  render() {
    console.log(this.state.contactList); 
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button type="button" onClick={this.addRandomContact}>Add Random Contact</button>
        <button type="button" onClick={this.sortByName}>Sort by name</button>
        <button type="button" onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.state.contactList.map((contact, index) => (
              <tr key={contact.id}>
                <td>
                  <img 
                  src={contact.pictureUrl} 
                  alt={contact.name} 
                  style={{height: "70px"}}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => this.removeContact(index)}
                    >
                      Delete {index}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
