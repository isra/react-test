import React, { Component } from "react";
import PropTypes from "prop-types";
import Contacts from "./Contacts";

class Contact extends Component {
  /* static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }; */

  state = {
    a: "a"
  };

  /* constructor() {
    super();
    this.state = {
      data: "s"
    };
  } */

  onShowClick = (id, e) => {
    console.log(id, e.target);
  };

  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.onShowClick.bind(this, id)}
            className="fas fa-sort-down"
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            <div>Email: {email}</div>
          </li>
          <li className="list-group-item">
            <div>Phone: {phone}</div>
          </li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

/* Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}; */

export default Contact;
