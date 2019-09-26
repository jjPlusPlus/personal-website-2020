import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group';
import DelayLink from './DelayLink';
import Typer from './Typer';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delaying: false,
      typing: true,
      blinking: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        blinking: false
      });
    }, 300);
    setTimeout(() => {
      this.setState({
        typing: false
      });
    }, 3000);
  }

  delayStart = () => {
    this.setState({
      delaying: true
    })
  }

  render() {
    const { delaying, blinking, typing } = this.state;
    return (
      <div className="landing-page">
        <div className="landing-page--content">
            <div className="page--header">
              <CSSTransition appear={true} in={true} timeout={111} classNames="text-animation">
                { blinking
                  ? <h1 className="dot-dot-dot">
                      <span className="blink">.</span>
                      <span className="blink">.</span>
                      <span className="blink">.</span>
                    </h1>
                  : <h1 className="page--title"><Typer text="Welcome" delay={100} interval={100} /><span className="blink">_</span></h1>
                }
              </CSSTransition>
            </div>
            <DelayLink delay={333} to="/app" className="landing-page--enter-button" onDelayStart={() => this.delayStart()}>
              <h2>Enter</h2>
            </DelayLink>
        </div>
      </div>
    );
  }
}

export default Landing;
