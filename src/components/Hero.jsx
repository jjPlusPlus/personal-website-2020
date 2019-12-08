import React, { Component } from 'react';
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
        endValue: 0,
        property: 'translateX'
      }, {
        startValue: -100,
        endValue: -350,
        property: 'translateZ'
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

class Hero extends Component {

  render() {
    return (
      <div className="hero box-3d--scene">

        <Plx className='box-3d' parallaxData={box3dParallax}>
          <div className="hero--content box-3d--front">
            <div className="edition-ribbon">
              <p>New Projects!</p>
            </div>
            <div className="hero--header">
              <p>The personal portfolio & blog of J.J. Medina</p>
            </div>

            <div className="coffee-stain">
              <img src="/coffee-stain-2.png" width="150px" alt="A coffee stain" />
            </div>
            <div className="hero--main-block flex flex-column">
              <div className="hero--main-block--content">
                <div className="hero--title-area">
                  <h1>JJ++</h1>
                </div>
              </div>
            </div>

            <div className="hero--footer flex flex-row">
              <p className="orly">O'REALLY BOOKS</p>
              <p className="flex-1"></p>
              <p>J.J. Medina</p>
            </div>
          </div>
          <div className="box-3d--left">
            <div className="hero--box3d-blank-black"></div>
            <div className="hero--box3d-blank-white">
              <img src="/demagorgon.svg" width="90px" alt="The Demagorgon" />
            </div>
            <div className="hero--box3d-blank-black"></div>
            <img src="jjplusplus-spine.svg" width="100px" alt="The spine of the JJ++ book" />
          </div>
          <div className="box-3d--right"></div>
          <div className="box-3d--bottom"></div>
          <div className="box-3d--top"></div>
          <div className="box-3d--shadow"></div>
        </Plx>

        <div className="scroll-position-indicator-wrapper">
          <p className="scroll-position-indicator-text">Scroll</p>
          <div className="scroll-position-indicator-bar">
            <Plx className='scroll-position-indicator' parallaxData={scrollPosition}>
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

export default Hero;
