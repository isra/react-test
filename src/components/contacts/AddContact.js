import React, { Component } from "react";

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

  render() {
    const { name, email, phone } = this.state;

    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form>
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
  }
}

export default AddContact;
