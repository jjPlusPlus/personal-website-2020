import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group';
import DelayLink from './DelayLink';
import Typer from './Typer';

import Plx from 'react-plx';

const box3dParallax = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: 80,
        property: 'rotateY',
      }, {
        startValue: 100,
        endValue: -100,
        property: 'translateX'
      }, {
        startValue: -100,
        endValue: -350,
        property: 'translateZ'
      }
    ],
  },
];
const enterBtnParallax = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 30,
        endValue: 0,
        property: 'translateY',
      }, {
        startValue: 0,
        endValue: 1,
        property: 'opacity'
      }
    ],
  },
];
const scrollPosition = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 20,
        endValue: 280,
        property: 'translateY',
      }
    ],
  },
];

class LandingB extends Component {
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

  enterIfMobile = () => {
    if (window.innerWidth <= 761) {
      this.props.history.push("/app");
    }
  }

  render() {
    const { delaying } = this.state;
    return (
      <div className="landing-page-b box-3d--scene" onClick={() => this.enterIfMobile()}>

        <Plx className='box-3d' parallaxData={ box3dParallax }>
          <div className="landing-page-b--content box-3d--front">
            <div className="edition-ribbon">
              <p>New Projects!</p>
            </div>
            <div className="landing-page-b--header">
              <p>The personal portfolio & blog of J.J. Medina</p>
            </div>

            <div className="coffee-stain">
              <img src="/coffee-stain-2.png" width="150px" alt="A coffee stain"/>
            </div>
            <div className="landing-page-b--main-block flex flex-column">
              <div className="landing-page-b--main-block--content">
                <div className="landing-page-b--title-area">
                  <h1>JJ++</h1>
                </div>
              </div>
            </div>

            <div className="landing-page-b--footer flex flex-row">
              <p className="orly">O'REALLY BOOKS</p>
              <p className="flex-1"></p>
              <p>J.J. Medina</p>
            </div>
          </div>
          <div className="box-3d--left">
            <div className="landing-page-b--box3d-blank-black"></div>
            <div className="landing-page-b--box3d-blank-white">
              <img src="/demagorgon.svg" width="90px" />
            </div>
            <div className="landing-page-b--box3d-blank-black"></div>
            <img src="jjplusplus-spine.svg" width="100px" />
          </div>
          <div className="box-3d--right"></div>
          <div className="box-3d--bottom"></div>
          <div className="box-3d--top"></div>
          <div className="box-3d--shadow"></div>
        </Plx>

        <Plx className='enter-btn' parallaxData={ enterBtnParallax }>
          <DelayLink delay={333} to="/app" className="landing-page-b--enter-button" onDelayStart={() => this.delayStart()}>
            <h2>Enter</h2>
          </DelayLink>
        </Plx>

        <div className="scroll-position-indicator-wrapper">
          <p className="scroll-position-indicator-text">Scroll</p>
          <div className="scroll-position-indicator-bar">
            <Plx className='scroll-position-indicator' parallaxData={ scrollPosition }>
              <div></div>
            </Plx>
            <div className="scroll-position-top"></div>
            <div className="scroll-position-mid flex flex-1 flex-center">
              <div className="scroll-position-mid--central-bar"></div>
            </div>
            <div className="scroll-position-bottom"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default LandingB;
