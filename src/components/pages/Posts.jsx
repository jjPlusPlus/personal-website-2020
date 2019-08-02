import React, { Component } from 'react';
import List from "../List";

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
              console.log(post);
              return <div key={index}>{post.name}</div>
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
