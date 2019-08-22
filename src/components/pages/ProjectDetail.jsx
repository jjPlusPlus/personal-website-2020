import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock';

import { firebaseConnect, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class ProjectDetail extends Component {
  render() {
    const allTags = this.props.tags;
    const project = this.props.location.state.project;
    return (
      <div className="page--container project-detail-page">

        <div className="page">
          {/* TODO: handle multiple images per resource */}
          <div className="project-detail--image-header">
            {project.images && project.images.map((image, index) => {
              return (
                <img src={image.downloadURL} alt={image.description || ""}/>
              )
            })}
          </div>

          <div className="project-detail--header">
            <h1>{project.name}</h1>
            <p className="project-detail--header--snippet">{project.snippet}</p>
          </div>

          <div className="project-detail--tags">
            { allTags &&
              project.tags.map((key, index) => {
                const tag = allTags[key];
                return (
                  <div className="tag" key={index} style={{backgroundColor: tag.bgColor || "#007aff", color: tag.color || '#FFF'}}>
                   <p>{tag.name}</p>
                  </div>
                )
              })
            }
          </div>
          <div className="project-detail--content">
            <ReactMarkdown source={project.content} renderers={{ code: CodeBlock }}/>
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

export default enhance(ProjectDetail);
