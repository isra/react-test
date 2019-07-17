import React, { Component } from "react";
import { Consumer } from "../../context";
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
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={this.onChange}
                      />
                    </div>
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
