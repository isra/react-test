import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const urlUsers = "https://jsonplaceholder.typicode.com/users";

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact.id === action.payload.id) {
            contact = action.payload;
          }
          return contact;
        })
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  async componentDidMount() {
    await axios
      .get(urlUsers)
      .then(response => this.setState({ contacts: response.data }));
  }

  state = {
    contacts: [],
    dispatch: action => this.setState(state => reducer(this.state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
