import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'

class Dashboard extends Component {
  signOut() {
    this.props.firebase.logout();
  }
  render() {
    const profile = this.props.auth.email;
    return (
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        { profile
              ? <div className="flex flex-row flex-center">
                  <p className="flex-1">{profile}</p>
                  <button className="button" onClick={() => this.signOut()}>Sign out</button>
                </div>
              : <p>loading...</p>
            }

        <Link to="/admin/dashboard/posts">I want to write some fucking articles</Link>
        <br />
        <Link to="/admin/dashboard/projects">I want to add a new fucking project</Link>
        <br />
        <Link to="/admin/dashboard/about">I want to update my fucking resume</Link>
      </div>
    )
  }
}

const enhance = compose(
  firebaseConnect([
    'settings' // sync /todos from firebase into redux
  ]),
  connect(({firebase: { auth, profile }}) => ({
    auth,
    profile
  }))
);

export default enhance(Dashboard);
