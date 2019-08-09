import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

class Projects extends Component {
  createNewResource = () => {
    const newResource = {
      name: "New Project",
      snippet: "A short description of the project to be shown on the list page",
      content: "__Detailed project content.__",
      isFeatured: false,
      isPublished: false,
      imageID: null,
      imagePath: null,
      tags: []
    }
    this.props.firebase.push("projects", newResource)
      .then(result => {
        this.props.history.push(`/admin/dashboard/projects/${result.key}`);
      }).catch(error => {
        console.log(error);
        alert("Failed to create the project");
      });
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="projects">
        <h1 className="page-header">My fucking projects</h1>
        <button onClick={this.createNewResource}>New Project</button>
        { projects &&
            Object.keys(projects).map((project, index) => {
              return (
                <div className="project" key={index}>
                  <h3>{projects[project].name}</h3>
                  <p>{projects[project].description}</p>
                  <Link to = {{ pathname: `/admin/dashboard/projects/${project}`, state:{project: projects[project]}}}>Edit</Link>
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
