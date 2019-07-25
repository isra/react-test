import React, { Component } from "react";
import { Consumer } from "../../context";
import ControlInputGroup from "../layout/ControlInputGroup";
// import uuid from "uuid";
import axios from "axios";

const urlUsers = "https://jsonplaceholder.typicode.com/users";

class AddContact extends Component {
  state = {
    email: "isra@gmail.com",
    name: "Israel",
    phone: "5555-555-555",
    error: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSaveContact = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, error } = this.state;

    if (!name.trim()) {
      error.name = "Name required";
    } else {
      delete error.name;
    }

    if (!email.trim()) {
      error.email = "Email required";
    } else {
      delete error.email;
    }

    if (!phone.trim()) {
      error.phone = "Phone required";
    } else {
      delete error.phone;
    }

    if (Object.getOwnPropertyNames(error).length) {
      this.setState({
        error
      });
      return null;
    }

    // id: uuid.v1(),
    const user = {
      name,
      email,
      phone
    };

    axios.post(urlUsers, user).then(response => {
      dispatch({
        type: "ADD_CONTACT",
        payload: response.data
      });

      this.setState({
        name: "",
        email: "",
        phone: ""
      });

      this.props.history.push("/");
    });
  };

  render() {
    const { name, email, phone, error } = this.state;

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
                      error={error.email}
                    />
                    <ControlInputGroup
                      name="name"
                      label="Name"
                      type="text"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                      error={error.name}
                    />
                    <ControlInputGroup
                      name="phone"
                      label="Phone"
                      type="text"
                      placeholder="Enter Phone"
                      value={phone}
                      onChange={this.onChange}
                      error={error.phone}
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
