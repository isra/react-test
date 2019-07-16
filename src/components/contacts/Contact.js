import React, { Component } from "react";
import PropTypes from "prop-types";

import { Consumer } from "../../context";

class Contact extends Component {
  /* static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }; */

  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
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
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  style={{ cursor: "pointer" }}
                />
                <i
                  id={id}
                  className="fas fa-times"
                  style={{ float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
        }}
      </Consumer>
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