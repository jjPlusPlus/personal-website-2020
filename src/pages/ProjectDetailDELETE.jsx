import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/CodeBlock';

import { firebaseConnect, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function LinkRenderer(props) {
  return <a href={props.href} target="_blank">{props.children}</a>
}

class ProjectDetail extends Component {
  render() {
    const allTags = this.props.tags;
    const project = this.props.location.state.project;
    const links = project.links;
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
          <div className="resource-detail--links">
            { links &&
              links.map((link, index) => {
                return (
                  <div className="resource-detail--link" key={index}>
                    <a href={link.url} target="_blank"><FontAwesomeIcon icon={faLink}/> {link.description}</a>
                  </div>
                )
              })
            }
          </div>
          <div className="project-detail--content">
            <ReactMarkdown source={project.content} renderers={{ code: CodeBlock, link: LinkRenderer }}/>
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
