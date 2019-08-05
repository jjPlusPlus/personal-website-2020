import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

class Projects extends Component {

  render() {
    const { projects } = this.props;
    return (
      <div className="projects">
        <h1 className="page-header">Some fucking projects by JJ</h1>
        { projects &&
            Object.keys(projects).map((project, index) => {
              return (
                <div className="project" key={index}>
                  <h3>{projects[project].name}</h3>
                  <p>{projects[project].description}</p>
                  <Link to = {{ pathname: `/projects/${project}`, state:{project: projects[project]}}}>More</Link>
                </div>
              )
            })
        }
      </div>
    )
  }
}

export default compose(
  firebaseConnect(() => [
    'projects'
  ]),
  connect((state) => ({
    projects: state.firebase.data.projects,
  }))
)(Projects)
