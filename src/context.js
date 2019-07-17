import React, { Component } from "react";

const Context = React.createContext();

const reduder = (state, action) => {
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
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "doe@gmail.com",
        phone: "55 5555 5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@gmail.com",
        phone: "44 4444 4444"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "55 5555 5555"
      }
    ],
    dispatch: action => this.setState(state => reduder(this.state, action))
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
