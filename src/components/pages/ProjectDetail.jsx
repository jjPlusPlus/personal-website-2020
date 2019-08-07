import React, { Component } from 'react';

class ProjectDetail extends Component {
  render() {
    const project = this.props.location.state.project;
    return (
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    )
  }
}
export default ProjectDetail;
