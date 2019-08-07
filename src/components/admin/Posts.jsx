import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import * as actions from '../../actions';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

class Posts extends Component {

  createNewResource = () => {
    const newResource = {
      name: "New Post",
      snippet: "A short description of the post to be shown in lists",
      content: "__Detailed post content.__",
      isFeatured: false,
      isPublished: false,
      imageID: null,
      imagePath: null,
      tags: []
    }
    this.props.firebase.push("posts", newResource)
      .then(result => {
        this.props.history.push(`/admin/dashboard/posts/${result.key}`);
      }).catch(error => {
        console.log(error);
        alert("Failed to create the post");
      });
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="posts">
        <h1 className="page-header">My fucking articles</h1>
        <button onClick={this.createNewResource}>New Post</button>
        { posts &&
          Object.keys(posts).map((post, index) => {
            return (
              <div className="post" key={index}>
                <h3>{posts[post].name}</h3>
                <p>{posts[post].description}</p>
                <Link to = {{ pathname: `/admin/dashboard/posts/${post}`, state:{post: posts[post]}}} >Edit</Link>
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
