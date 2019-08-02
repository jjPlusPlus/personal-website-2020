import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import { connect} from 'react-redux';
import * as actions from '../../actions';

class Posts extends Component {
  componentWillMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props;
    return (
      <div className="posts">
        <h1 className="page-header">Some shit JJ wrote</h1>

        { posts
          ? posts.posts.map((post, index) => {
              return (
                <div key={index}>
                  <p>{post.name}</p>
                  <p>{post.description}</p>
                  <Link to = {{ pathname: `/posts/${post.key}`, state:{post: post} }} >More</Link>
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

export default connect(mapStateToProps, actions)(Posts);
