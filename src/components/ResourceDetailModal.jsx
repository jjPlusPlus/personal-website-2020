import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

import { firebaseConnect, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import Imgix from 'react-imgix';
function LinkRenderer(props) {
  return <a href={props.href} target="_blank">{props.children}</a>
}

const ResourceDetailModal = (props) => {

  const allTags = props.tags;
  const item = props.detail;
  const links = item.links;

  const [showModal, setModalOpacity] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalOpacity(true);
    }, 333);
  }, [])

  
  return (
    <div className={"resource-detail-modal " + (showModal ? "visible" : "hidden")}>
      <Imgix
        src={item.heroImage}
        sizes="(min-width: 1280px) 1280px, 100vw"
        imgixParams={{ ar: "5:2", auto: "format", fit: "crop" }}
        classNames="full-width"
      />
      <div className="resource-detail-modal--content">
        <div className=".resource-detail--header">
          <h1>{item.name}</h1>
          <p className="resource-detail--posted-at">May 20 @ 3pm</p>
          <p className="resource-detail--header--snippet">{item.snippet}</p>
        </div>

        <div className="resource-detail--tags">
          {allTags &&
            item.tags.map((key, index) => {
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
          <ReactMarkdown source={item.content} renderers={{ code: CodeBlock, link: LinkRenderer }} />
        </div>
      </div>
    </div>
  )
}

export default ResourceDetailModal;