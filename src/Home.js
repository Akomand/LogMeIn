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
                Event Run
              </div>
              {user == null && (
              <p className="lead" style={biggerLead}>
                Welcome to EventRun! Need to spread the word about your business or
                event? Are you a job seeker looking for your next big break? 
                You're at the right place! EventRun helps local businesses and 
                non-profit organizations incentivize participation in events! 
                Attend these events to earn points and redeem prizes. Register now!
              </p>)}

              {user && (
              <p className="lead" style={biggerLead}>
                Welcome to EventRun, {userName}! Need to spread the word about your business or
                event? Are you a job seeker looking for your next big break? 
                You're at the right place! EventRun helps local businesses and 
                non-profit organizations incentivize participation in events! 
                Attend these events to earn points and redeem prizes!
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
