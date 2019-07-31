import React, { Component } from 'react';
import List from "../List";
import { FirebaseContext, withFirebase } from '../Firebase/index';

import { connect} from 'react-redux';
import { compose } from 'recompose';
import * as actions from '../../actions';

// interface Props {
//   firebase(): object,
//   fetchPosts(argument:any): void,
//   getProjects(argument:any): object,
// }
class Posts extends Component {
  render() {
    return (
      <div className="posts">
        <h1 className="page-header">Some shit JJ wrote</h1>
        <FirebaseContext.Consumer>
          {firebase => <List firebase={firebase} model="projects" /> }
        </FirebaseContext.Consumer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps, actions)(Posts);
