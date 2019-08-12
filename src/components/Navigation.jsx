import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {

  render() {
    return (
      <div className="navigation-page">
        <div className="navigation-page-gradient-cover"></div>
        <div className="navigation">
          <div className="navigation-page-header">
            <h1 className="navigation-page-title">What do you want?</h1>
          </div>
          <Link to="/projects" className="navigation-item">
            <h1>I want to see JJ's projects</h1>
          </Link>
          <Link to="/posts" className="navigation-item">
            <h1>I want to read JJ's blog</h1>
          </Link>
          <Link to="/about" className="navigation-item">
            <h1>I want to know more about JJ</h1>
          </Link>
          <Link to="/site" className="navigation-item">
            <h1>This is a strange website</h1>
          </Link>
          <Link to="/admin" className="navigation-item">
            <h1>I am JJ</h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
