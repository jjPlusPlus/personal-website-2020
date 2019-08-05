import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
  render() {
    const { authenticating, user, authError } = this.props;
    return (
      <div className="admin-page">
        <h2>This is my website and I want to change shit</h2>
        { user
          ? <div className="admin-dashboard">
              <strong>{user.email}</strong>
              <Link to="/admin/dashboard/posts" value="I want to write some fucking articles" />
              <Link to="/admin/dashboard/projects" value="I want to add a new fucking project" />
              <Link to="/admin/dashboard/about" value="I want to update my fucking resume" />" />
            </div>
          : null
        }
      </div>
    );
  }
}

export default Admin;
