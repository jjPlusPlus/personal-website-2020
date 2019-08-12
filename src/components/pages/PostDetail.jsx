import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock';

import { firebaseConnect, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class PostDetail extends Component {
  render() {
    const allTags = this.props.tags;
    const post = this.props.location.state.post;
    return (
      <div className="post-detail-page">

        <div className="post-detail">
          {/* TODO: handle multiple images per resource */}
          <div className="post-detail--image-header">
            {post.images.map((image, index) => {
              return (
                <img src={image.downloadURL} alt={image.description || ""}/>
              )
            })}
          </div>

          <div className="post-detail--header">
            <h1>{post.name}</h1>
            <p className="post-detail--header--snippet">{post.snippet}</p>
          </div>

          <div className="post-detail--tags">
            { allTags &&
              post.tags.map((key, index) => {
                const tag = allTags[key];
                return (
                  <div className="tag" style={{backgroundColor: tag.bgColor || "#007aff", color: tag.color || '#FFF'}}>
                   <p>{tag.name}</p>
                  </div>
                )
              })
            }
          </div>
          <div className="post-detail--content">
            <ReactMarkdown source={post.content} renderers={{ code: CodeBlock }}/>
          </div>
        </div>
      </div>
    )
  }
}

const enhance = compose(
  firebaseConnect(props => {
    return [
      { path: `posts/${props.match.params.id}` },
      'tags'
    ]
  }),
  connect(({ firebase }, props) => ({
    post: getVal(firebase, `data/posts/${props.match.params.id}`),
    tags: firebase.data.tags
  }))
)

export default enhance(PostDetail);
