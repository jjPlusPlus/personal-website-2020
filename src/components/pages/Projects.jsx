import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

class Projects extends Component {

  render() {
    const { projects } = this.props;
    if (projects) {
      return (
        <div className="projects">
          <h1 className="page-header">Some fucking projects by JJ</h1>
          { !isLoaded(projects)
            ? <p>Loading...</p>
            : null
          }

          { isEmpty(projects)
            ? <p>JJ Hasn't added any fucking projects yet</p>
            : null
          }

          {
            Object.keys(projects).map((project, index) => {
              console.log(project);
              return <div className="project" key={index}>{projects[project].name}</div>
            })
          }
        </div>
      )
    } else {
      return null;
    }
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
