import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group';
import DelayLink from './DelayLink';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delaying: false
    }
  }

  delayStart = () => {
    this.setState({
      delaying: true
    })
  }

  render() {
    const { delaying } = this.state;
    return (
      <div className="page--container navigation-page ">
        <div className="page">

          <div className="page--header">
            <CSSTransition appear={true} in={true} timeout={111} classNames="text-animation">
              <h1 className="page--title">What do you want?</h1>
            </CSSTransition>
          </div>
          <div className={"fade-left " + (delaying === true ? "fading-left" : "")}>
            <CSSTransition appear={true} in={true} timeout={111} classNames="list-animation">
              <DelayLink delay={333} to="/projects" className="page-list-item" onDelayStart={() => this.delayStart()}>
                <h1>I want to see JJ's projects</h1>
              </DelayLink>
            </CSSTransition>
            <CSSTransition appear={true} in={true} timeout={222} classNames="list-animation">
              <DelayLink delay={333} to="/posts" className="page-list-item" onDelayStart={() => this.delayStart()}>
                <h1>I want to read JJ's blog</h1>
              </DelayLink>
            </CSSTransition>
            <CSSTransition appear={true} in={true} timeout={333} classNames="list-animation">
              <DelayLink delay={333} to="/about" className="page-list-item" onDelayStart={() => this.delayStart()}>
                <h1>Who is JJ</h1>
              </DelayLink>
            </CSSTransition>
            <CSSTransition appear={true} in={true} timeout={444} classNames="list-animation">
              <DelayLink delay={333} to="/site" className="page-list-item" onDelayStart={() => this.delayStart()}>
                <h1>This is a strange website</h1>
              </DelayLink>
            </CSSTransition>
            <CSSTransition appear={true} in={true} timeout={555} classNames="list-animation">
              <DelayLink delay={333} to="/admin" className="page-list-item" onDelayStart={() => this.delayStart()}>
                <h1>I am JJ</h1>
              </DelayLink>
            </CSSTransition>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
