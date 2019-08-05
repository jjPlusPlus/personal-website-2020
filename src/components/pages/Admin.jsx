import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import { connect } from 'react-redux'

import SignInForm from '../SignInForm';
import Dashboard from '../admin/Dashboard';

class Admin extends Component {

  render() {
    const profile = this.props.auth.email;
    return (
      <div className="admin-page">
        <h2>This is my fucking website and I want to make fucking changes</h2>
        { profile
          ? <Redirect to='/admin/dashboard' />
          : <SignInForm />
        }
      </div>
    );
  }
}

const enhance = connect(
  // Map redux state to component props
  ({ firebase: { auth, profile } }) => ({
    auth,
    profile
  })
)

export default enhance(Admin);
