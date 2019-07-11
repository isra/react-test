import React, { Component } from "react";
import PropTypes from "prop-types";
import Contacts from "./Contacts";

class Contact extends Component {
  /* static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }; */

  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
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
