import React, { Component } from 'react';
import List from "../List";

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
              console.log(project);
              return <div key={index}>{project.name}</div>
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
