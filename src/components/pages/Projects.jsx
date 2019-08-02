import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import { connect} from 'react-redux';
import * as actions from '../../actions';

class Projects extends Component {
  componentWillMount() {
    this.props.getProjects();
  }
  render() {
    const { projects, loading } = this.props;
    return (
      <div className="projects">
        <h1 className="page-header">Some fucking projects by JJ</h1>

        { projects
          ? projects.projects.map((project, index) => {
              return (
                <div key={index}>
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <Link to = {{ pathname: `/projects/${project.key}`, state:{project: project} }} >More</Link>
                </div>
              )
          })
          : null
        }
        { loading
          ? <p>LOADING</p>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, actions)(Projects);
