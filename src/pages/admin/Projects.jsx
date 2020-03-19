import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Typer from 'components/Typer';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

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

  goBack = () => {
    this.props.history.push("/admin/dashboard");
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="page--container admin-projects">
        <div className="page">
          <div className="flex flex-row">
            <div className="page-header--back-button flex flex-center" onClick={() => this.goBack()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="page--header flex-1">

              <h1 className="page--title">
                <Typer text="Projects" delay={1200} interval={150} />
                <span class="blink">_</span>
              </h1>
            </div>
          </div>
          <div className="projects">
            <div className="page-list-item list-item-highlight" onClick={this.createNewResource}>
              <h3>I want to add a new Project</h3>
            </div>
            { projects &&
                Object.keys(projects).map((project, index) => {
                  return (
                    <Link to = {{ pathname: `/admin/dashboard/projects/${project}`, state:{project: projects[project]}}}>
                      <div className="page-list-item" key={index}>
                        <h3>{projects[project].name}</h3>
                        <p>{projects[project].description}</p>
                      </div>
                    </Link>
                  )
                })
            }
          </div>
        </div>
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
