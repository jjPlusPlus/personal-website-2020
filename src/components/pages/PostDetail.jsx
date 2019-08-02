import React, { Component } from 'react';

class PostDetail extends Component {
  render() {
    const post = this.props.location.state.post;
    return (
      <div>
        <h2>{post.name}</h2>
        <p>{post.description}</p>
      </div>
    )
  }
}
export default PostDetail;
