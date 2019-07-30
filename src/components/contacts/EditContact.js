import React, { Component } from "react";
import { Consumer } from "../../context";
import ControlInputGroup from "../layout/ControlInputGroup";
// import uuid from "uuid";
import axios from "axios";

const urlUsers = "https://jsonplaceholder.typicode.com/users";

class EditContact extends Component {
  state = {
    email: "",
    name: "",
    phone: "",
    error: {}
  };

  componentDidMount() {
    axios.get(`${urlUsers}/${this.props.match.params.id}`).then(response => {
      this.setState({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone
      });
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSaveContact = async (dispatch, e) => {
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

    await axios
      .put(`${urlUsers}/${this.props.match.params.id}`, user)
      .then(response => {
        dispatch({
          type: "UPDATE_CONTACT",
          payload: response.data
        });

        this.setState({
          name: "",
          email: "",
          phone: ""
        });
      });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, error } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <h1 className="display-4">
                <span className="text-danger">Edit</span> Contact
              </h1>
              <div className="card mb-3">
                <div className="card-header">Information</div>
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
                      Editar
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

export default EditContact;
