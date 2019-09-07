import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from "recompose";

import Typer from '../Typer';

class Dashboard extends Component {
  signOut() {
    this.props.firebase.logout();
  }
  render() {
    const profile = this.props.auth.email;
    return (
      <div className="page--container admin-dashboard">
        <div className="page">
          <div className="page--header">
            <h1 className="page--title">
              <Typer text="What do you want to do?" delay={1200} interval={150} />
              <span className="blink">_</span>
            </h1>
          </div>

          <div className="page--content card">
            { profile
              ? <div className="flex flex-row flex-center">
                  <p className="flex-1">{profile}</p>
                  <button className="button" onClick={() => this.signOut()}>Sign out</button>
                </div>
              : <p>loading...</p>
            }
          </div>
          <Link to="/admin/dashboard/posts">
            <div className="page-list-item">
              <h1>I want to write/edit/delete some articles</h1>
            </div>
          </Link>
          <Link to="/admin/dashboard/projects">
            <div className="page-list-item">
              <h1>I want to add/edit/delete a project</h1>
            </div>
          </Link>
          <Link to="/admin/dashboard/about">
            <div className="page-list-item">
              <h1>I want to update my resumè</h1>
            </div>
          </Link>
        </div>
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
