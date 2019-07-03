import React, { Component } from 'react';
import { Link } from '@reach/router';
import './Home.css';

class Home extends Component {
  render() {
    const { user, userName } = this.props;

    const biggerLead = {
      fontSize: 1.4 + 'em',
      fontWeight: 200
    };

    return (
      <body>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-10 col-md-10 col-lg-8 col-xl-7">
              <div
                className="display-4 text-primary mt-3 mb-2"
                style={{
                  fontSize: 2.8 + 'em'
                }}
              >
                LogMeIn
              </div>
              {user == null && (
              <p className="lead" style={biggerLead}>
                Welcome to LogMeIn! Need to organize your work meetings? 
                You're at the perfect place. LogMeIn allows you to create, organize,
                and manage meetings! Better yet, LogMeIn has a check-in feature where 
                users can be checked into meetings. Make planning your meetings a breeze 
                by registering now!
              </p>)}

              {user && (
              <p className="lead" style={biggerLead}>
                Welcome {userName}! Need to organize your work meetings? 
                You're at the perfect place. LogMeIn allows you to create, organize,
                and manage meetings! Better yet, LogMeIn has a check-in feature where 
                users can be checked into meetings. Click below to manage your meetings!
              </p>)}

                {user == null && (
                <span>
                  <Link
                    to="/register"
                    className="btn btn-outline-primary mr-2"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-outline-primary mr-2"
                  >
                    Log In
                  </Link>
                </span>
              )}
              {user && (
                <Link to="/meetings" className="btn btn-primary">
                  Meetings
                </Link>
              )}
            </div>{' '}
            {/* columns */}
          </div>
        </div>
        </body>
    );
  }
}

export default Home;
