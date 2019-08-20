import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import { encode, decode, addUrlProps, UrlQueryParamTypes, replaceInUrlQuery } from 'react-url-query';

import { CSSTransition } from "react-transition-group";
class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tag: null,
    }
    this.setTag = this.setTag.bind(this);
  }

  setTag(key) {
    replaceInUrlQuery('tagKey', key);
  }

  render() {
    const { projects, tags, tagKey } = this.props;
    const { tag } = this.state;
    return (
      <div className="projects-page page--container">
        <div className="page">
          <div className="page--header">
            <h1 className="page--title">
              { tags && tagKey ? "Here are some projects with " + (tags[tagKey].name) : "What kind of projects are you interested in?"}
            </h1>
          </div>

          { tags && !tagKey &&
              Object.keys(tags).map((key, index) => {
                const tag = tags[key];
                if (tag.projects && tag.projects.length) {
                  const timeout = 50 * (index);
                  return (
                    <CSSTransition key={index} appear={true} in={true} timeout={timeout} classNames="list-animation">
                      <div onClick={() => this.setTag(key)} className="page-list-item">
                        <h1>I want to see projects with {tag.name}</h1>
                      </div>
                    </CSSTransition>
                  )
                }
              })
          }

          { projects && tagKey
            ? <div className="projects-page--projects">
                {
                  Object.keys(projects).map((project, index) => {
                    if (tagKey && projects[project].tags && projects[project].tags.includes(tagKey)) {
                      const timeout = 50 * (index);
                      return (
                        <CSSTransition key={index} appear={true} in={true} timeout={timeout} classNames="list-animation">
                          <Link to = {{ pathname: `/projects/${project}`, state:{project: projects[project]}}} className="page-list-item">
                            <h1>{projects[project].name}</h1>
                            <p>{projects[project].description}</p>
                          </Link>
                        </CSSTransition>
                      )
                    }
                  })
                }
                <div onClick={() => this.setTag(null)} className="page-list-item unset-tag">
                  <h1>I want to see different projects</h1>
                </div>
              </div>
            : null
          }
        </div>
      </div>
    )
  }
}

const urlPropsQueryConfig = {
  tagKey: { type: UrlQueryParamTypes.string, queryParam: 'tagKey' }
};

export default compose(
  firebaseConnect(() => [
    'projects',
    'tags'
  ]),
  connect((state) => ({
    projects: state.firebase.data.projects,
    tags: state.firebase.data.tags
  })),
  addUrlProps({
    urlPropsQueryConfig
  })
)(Projects)
