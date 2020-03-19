import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Typer from 'components/Typer';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

class Posts extends Component {

  createNewResource = () => {
    const newResource = {
      name: "New Post",
      snippet: "A short description of the post to be shown in lists",
      content: "__Detailed post content.__",
      isFeatured: false,
      isPublished: false,
      imageID: null,
      imagePath: null,
      tags: []
    }
    this.props.firebase.push("posts", newResource)
      .then(result => {
        this.props.history.push(`/admin/dashboard/posts/${result.key}`);
      }).catch(error => {
        console.log(error);
        alert("Failed to create the post");
      });
  }

  goBack = () => {
    this.props.history.push("/admin/dashboard");
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="page--container admin-posts">
        <div className="page">
          <div className="flex flex-row">
            <div className="page-header--back-button flex flex-center" onClick={() => this.goBack()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="page--header flex-1">

              <h1 className="page--title">
                <Typer text="Posts" delay={1200} interval={150} />
                <span class="blink">_</span>
              </h1>
            </div>
          </div>
          <div className="posts">
            <div className="page-list-item list-item-highlight" onClick={this.createNewResource}>
              <h3>I want to write a new Post</h3>
            </div>

            { posts &&
              Object.keys(posts).map((post, index) => {
                return (
                  <Link to = {{ pathname: `/admin/dashboard/posts/${post}`, state:{post: posts[post]}}} >
                    <div className="page-list-item" key={index}>
                      <h3>{posts[post].name}</h3>
                      <p>{posts[post].description}</p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  firebaseConnect(() => [
    'posts'
  ]),
  connect((state) => ({
    posts: state.firebase.data.posts,
  }))
)(Posts)
