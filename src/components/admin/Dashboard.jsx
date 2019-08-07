import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const profile = this.props.auth.email;
    return (
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        { profile
          ? <p>{profile}</p>
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
const enhance = connect(
  // Map redux state to component props
  ({ firebase: { auth, profile } }) => ({
    auth,
    profile
  })
)
export default enhance(Dashboard);
