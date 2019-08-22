import React, { Component } from 'react';
import List from "../List";

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import { encode, decode, addUrlProps, UrlQueryParamTypes, replaceInUrlQuery } from 'react-url-query';

import { CSSTransition } from "react-transition-group";
import Typer from '../Typer';

class Posts extends Component {

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
    const { posts, tags, tagKey } = this.props;
    const { tag } = this.state;

    return (
      <div className="page--container posts-page">
        <div className="page">
          <div className="page--header">
            <h1 className="page--title">
              { tags && tagKey
                ? <Typer text={"Here are some posts about " + (tags[tagKey].name)} delay={1200} interval={150} />
                : <Typer text={"What kind of posts are you interested in?"} delay={1200} interval={150} />
              }
              <span class="blink">_</span>
            </h1>
          </div>

          { tags && !tagKey &&
            Object.keys(tags).map((key, index) => {
              const tag = tags[key];
              if (tag.posts && tag.posts.length) {
                const timeout = 50 * (index);
                return (
                  <CSSTransition key={index} appear={true} in={true} timeout={timeout} classNames="list-animation">
                    <div onClick={() => this.setTag(key)} className="page-list-item">
                      <h1>I want to read posts about {tag.name}</h1>
                    </div>
                  </CSSTransition>
                )
              }
            })
          }

          { posts && tagKey
            ? <div className="posts-page--posts">
                {
                  Object.keys(posts).map((post, index) => {
                    if (tagKey && posts[post].tags && posts[post].tags.includes(tagKey)) {
                      const timeout = 50 * (index);
                      return (
                        <CSSTransition key={index} appear={true} in={true} timeout={timeout} classNames="list-animation">
                          <Link to = {{ pathname: `/posts/${post}`, state:{post: posts[post]}}} className="page-list-item">
                            <h1>{posts[post].name}</h1>
                            <p>{posts[post].description}</p>
                          </Link>
                        </CSSTransition>
                      )
                    }
                  })
                }
                <div onClick={() => this.setTag(null)} className="page-list-item unset-tag">
                  <h1>I want to read about something else</h1>
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
    'posts',
    'tags'
  ]),
  connect((state) => ({
    posts: state.firebase.data.posts,
    tags: state.firebase.data.tags
  })),
  addUrlProps({
    urlPropsQueryConfig
  })
)(Posts)
