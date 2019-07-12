import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  /* static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }; */

  state = {
    showContactInfo: false
  };

  /* constructor() {
    super();
    this.state = {
      data: "s"
    };
  } */

  /* onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  }; */

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() => {
              this.setState({
                showContactInfo: !this.state.showContactInfo
              });
            }}
            className="fas fa-sort-down"
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              <div>Email: {email}</div>
            </li>
            <li className="list-group-item">
              <div>Phone: {phone}</div>
            </li>
          </ul>
        ) : null}
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
