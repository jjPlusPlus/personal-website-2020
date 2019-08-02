import React, { Component } from 'react';

class List extends Component {
  async componentWillMount() {
    const { firebase, model } = this.props;
    const projects = firebase.getProjects();
    const test = firebase.projects();
    debugger;
    this.setState({
      projects: projects
    })
  }
  render() {
    return (
      <div className="list">

      </div>
    );
  }
}

export default List;
