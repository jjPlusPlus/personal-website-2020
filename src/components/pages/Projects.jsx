import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import { encode, decode, addUrlProps, UrlQueryParamTypes, replaceInUrlQuery } from 'react-url-query';

import { CSSTransition } from "react-transition-group";
import Typer from '../Typer';

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
              { tags && tagKey
                ? <Typer text={tagKey === "all" ? "Here are all the projects" : "Here are some projects with " + (tags[tagKey].name)} delay={1200} interval={150} />
                : <Typer text={"What kind of projects are you interested in?"} delay={1200} interval={150} />
              }
              <span class="blink">_</span>
            </h1>
          </div>

          { tags && !tagKey
            ? <div>
                <div onClick={() => this.setTag("all")} className="page-list-item page-list-item--highlighted">
                  <h1>I want to see them ALL</h1>
                </div>
                {
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
              </div>
            : null
          }

          { projects && tagKey
            ? <div className="projects-page--projects">
                {
                  Object.keys(projects).map((project, index) => {
                    if (tagKey === "all") {
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
