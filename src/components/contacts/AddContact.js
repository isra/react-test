import React, { Component } from "react";
import { Consumer } from "../../context";
import ControlInputGroup from "../layout/ControlInputGroup";
import uuid from "uuid";

class AddContact extends Component {
  state = {
    email: "isra@gmail.com",
    name: "Israel",
    phone: "5555-555-555"
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSaveContact = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        id: uuid.v1(),
        name,
        email,
        phone
      }
    });

    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSaveContact.bind(this, dispatch)}>
                    <ControlInputGroup
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={this.onChange}
                    />
                    <ControlInputGroup
                      name="name"
                      label="Name"
                      type="text"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                    />
                    <ControlInputGroup
                      name="phone"
                      label="Phone"
                      type="text"
                      placeholder="Enter Phone"
                      value={phone}
                      onChange={this.onChange}
                    />
                    <button type="submit" className="btn btn-block btn-light">
                      Guardar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
