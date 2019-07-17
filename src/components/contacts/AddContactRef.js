import React, { Component } from "react";

class AddContact extends Component {
  static defaultProps = {
    name: "isra",
    email: "israel@gmail.com",
    phone: "555 555 5555"
  };

  onClickSave = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  render() {
    const { name, email, phone } = this.props;

    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form onSubmit={this.onClickSave}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  defaultValue={email}
                  ref={this.emailInput}
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
                  defaultValue={name}
                  ref={this.nameInput}
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
                  defaultValue={phone}
                  ref={this.phoneInput}
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
