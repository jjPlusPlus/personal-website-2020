import React, { Component } from 'react';
import List from "../List";

import { connect} from 'react-redux';
import * as actions from '../../actions';

class Posts extends Component {
  componentWillMount() {
    this.props.getProjects();
  }
  render() {
    const { projects, loading } = this.props;
    return (
      <div className="posts">
        <h1 className="page-header">Some shit JJ wrote</h1>
        <p>{projects}</p>
        {loading
          ? <p>LOADING</p>
          : <p>NOT LOADING</p>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, actions)(Posts);
