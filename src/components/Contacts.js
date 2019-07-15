import React, { Component } from "react";
import Contact from "./Contact";

import { Consumer } from "../context";

class Contacts extends Component {
  constructor() {
    super();
  }

  deleteContact = (id, e) => {
    console.log(id);
    this.setState({
      contacts: this.state.contacts.filter(e => e.id !== id)
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
