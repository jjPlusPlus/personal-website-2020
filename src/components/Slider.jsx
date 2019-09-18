import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCircleNotch, faCircle } from "@fortawesome/free-solid-svg-icons";

import { CSSTransition, TransitionGroup } from "react-transition-group";


/* SLIDER
 * props: interval[int, slide time in ms], content [Array]
 *          -> items: { title[string], text[string], image[url, MUST BE 1:1 aspect ratio] }
 * starts a timer when the component mounts, changes content index to n+1 (unless n is equal to content length )
 * if a user interacts with the slider buttons, the timer is cancelled
*/
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.increment();
    }, this.props.interval || 4000)
  }

  increment() {
    const length = this.props.contents.length;
    let currentIndex = this.state.index;
    let newIndex = 0;
    if (currentIndex + 1 < length) {
      newIndex = currentIndex + 1;
    } else {
      newIndex = 0;
    }
    this.setState({
      index: newIndex
    })
  }

  decrement() {
    const length = this.props.contents.length;
    let currentIndex = this.state.index;
    let newIndex = 0;
    if (currentIndex === 0) {
      newIndex = length - 1;
    } else {
      newIndex = currentIndex - 1;
    }
    this.setState({
      index: newIndex,
    })
  }

  manualSliderClick(direction) {
    // stop the timer;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    if (direction === "next") {
      this.increment();
    } else {
      this.decrement();
    }
  }

  render() {
    const { contents, hideImageOnSmall } = this.props;
    const { index } = this.state;

    return (
      <div>
        <div className="text-slider">
          <button className="slider-button previous-button" onClick={() => this.manualSliderClick("previous")}> <FontAwesomeIcon icon={faChevronLeft} /> </button>
            <TransitionGroup component={null}>
              <CSSTransition key={index} timeout={{appear: 333, enter: 222, exit: 444}} mountOnEnter={true} unmountOnExit classNames="slider-animation">
                <div className="slider-item">
                  <div className="slider-item--content flex flex-row">
                    <img className={"slider-item--image " + (hideImageOnSmall ? "hide-for-small" : "")} src={contents[index].image} width="100px" height="100px" />
                    <p className="flex-1">
                      <span className="slider-item--title">{contents[index].title}</span> <br />
                      <span>{contents[index].text}</span>
                    </p>
                  </div>
                </div>
              </CSSTransition>
            </TransitionGroup>
          <button className="slider-button next-button" onClick={() => this.manualSliderClick("next")}> <FontAwesomeIcon icon={faChevronRight} /> </button>
        </div>
        <div className="progress">
          {contents.map((item, idx) => {
            return (
              <span className="progress-item" key={idx}>
                {idx <= index ? <FontAwesomeIcon icon={faCircle} /> : <FontAwesomeIcon icon={faCircleNotch} />}
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Slider
