import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/CodeBlock';

import { firebaseConnect, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import Imgix from 'react-imgix';

function LinkRenderer(props) {
  return <a href={props.href} target="_blank">{props.children}</a>
}

const ResourcePage = (props) => {

  const allTags = props.tags;
  const resource = props.resource;

  

  const links = resource ? resource.links : [];

  const [showModal, setModalOpacity] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalOpacity(true);
    }, 333);
  }, [])
  debugger
  if (!resource) {
    return <div>poo</div>
  }
  return (
    <div className={"resource-detail-modal " + (showModal ? "visible" : "hidden")}>
      <Imgix
        src={resource ? resource.heroImage : ""}
        sizes="(min-width: 1280px) 1280px, 100vw"
        imgixParams={{ ar: "5:2", auto: "format", fit: "crop" }}
        classNames="full-width"
      />
      <div className="resource-detail-modal--content">
        <div className=".resource-detail--header">
          <h1>{resource.name}</h1>
          <p className="resource-detail--posted-at">May 20 @ 3pm</p>
          <p className="resource-detail--header--snippet">{resource.snippet}</p>
        </div>

        <div className="resource-detail--tags">
          {allTags &&
            resource.tags.map((key, index) => {
              const tag = allTags[key];
              return (
                <div className="tag" key={index} style={{ backgroundColor: tag.bgColor || "#007aff", color: tag.color || '#FFF' }}>
                  <p>{tag.name}</p>
                </div>
              )
            })
          }
        </div>
        <div className="resource-detail--links">
          {links &&
            links.map((link, index) => {
              return (
                <div className="resource-detail--link" key={index}>
                  <a href={link.url} target="_blank"><FontAwesomeIcon icon={faLink} /> {link.description}</a>
                </div>
              )
            })
          }
        </div>
        <div className="resource-detail-modal--markdown">
          <ReactMarkdown source={resource.content} renderers={{ code: CodeBlock, link: LinkRenderer }} />
        </div>
      </div>
    </div>
  )
}

const enhance = compose(
  firebaseConnect(props => {
    debugger
    // props.location.state has the resource (item & type)
    if (props.match.path === "/projects/:id") {
      return [
        { path: `projects/${props.match.params.id}` },
        'tags'
      ]
    } else if (props.match.path === "/posts/:id") {
      return [
        { path: `posts/${props.match.params.id}` },
        'tags'
      ]
    } else {
      return false;
    }
  }),
  connect(({ firebase }, props) => ({
    resource: getVal(firebase, `data/${props.match.path.includes('projects') ? "projects" : "posts"}/${props.match.params.id}`),
    tags: firebase.data.tags
  }))
)

export default enhance(ResourcePage);
