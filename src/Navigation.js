import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';

import './Navigation.css';

class Navigation extends Component {
  render() {
    const { user, logOutUser, userPoints } = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <Link to={user ? "/" : "/"} className="navbar-brand">
            <FaUsers className="mr-1" /> Event Run
          </Link>
          <div className="navbar-nav ml-auto">
            {user && (
              <Link className="nav-item nav-link" to="/meetings">
                {this.props.userPoints}
              </Link>
            )}
            {user && (
              <Link className="nav-item nav-link" to="/meetings">
                Events
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/login">
                Log In
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/register">
                Register
              </Link>
            )}
            {user && (
              <Link
                className="nav-item nav-link"
                to="/login"
                onClick={e => logOutUser(e)}
              >
                Log Out
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
