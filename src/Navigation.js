import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';

import './Navigation.css';

class Navigation extends Component {
  render() {
    const { user, logOutUser } = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <Link to={user ? "/meetings" : "/"} className="navbar-brand">
            <FaUsers className="mr-1" /> LogMeIn
          </Link>
          <div className="navbar-nav ml-auto">
            {user && (
              <Link className="nav-item nav-link" to="/meetings">
                Meetings
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
