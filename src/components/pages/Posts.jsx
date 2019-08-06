import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import * as actions from '../../actions';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

class Posts extends Component {

  render() {
    const { posts } = this.props;
    return (
      <div className="posts">
        <h1 className="page-header">JJ's fucking articles:</h1>

        { posts &&
          Object.keys(posts).map((post, index) => {
            return (
              <div className="post" key={index}>
                <h3>{posts[post].name}</h3>
                <p>{posts[post].description}</p>
                <Link to = {{ pathname: `/posts/${post}`, state:{post: posts[post]}}} >More</Link>
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
    'posts'
  ]),
  connect((state) => ({
    posts: state.firebase.data.posts,
  }))
)(Posts)
