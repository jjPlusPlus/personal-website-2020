import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = rest.auth;
  return (
    <Route {...rest} render={(props) => {
      if (!auth.isLoaded) {
        return null;
      }
      return (
        auth && auth.isEmpty === false
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/admin/login',
            state: { from: props.location }
          }} />
        )
      }} />
  )
}

const enhance = connect(
  ({ firebase: { auth, profile } }) => ({
    auth,
    profile
  })
)

export default enhance(ProtectedRoute)
