import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

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
      <div className="page--container projects-page ">
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
                  return (
                    <div onClick={() => this.setTag(key)} className="page-list-item">
                      <h1>I want to see projects with {tag.name}</h1>
                    </div>
                  )
                }
              })
          }

          { projects && tagKey
            ? <div className="projects-page--projects">
                {
                  Object.keys(projects).map((project, index) => {
                    if (tagKey && projects[project].tags && projects[project].tags.includes(tagKey)) {
                      return (
                        <Link to = {{ pathname: `/projects/${project}`, state:{project: projects[project]}}} className="page-list-item">
                          <h1>{projects[project].name}</h1>
                          <p>{projects[project].description}</p>
                        </Link>
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
