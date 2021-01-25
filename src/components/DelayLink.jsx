import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

/**
 * based on https://gist.github.com/headzoo/8f4c6a5e843ec26abdcad87cd93e3e2e
 * Wraps the React Router Link component and creates a delay after the link is clicked.
 */

const DelayLink = (props) => {

  const [timeout, updateTimeout] = useState(null);

  useEffect(() => {
    return () => {
      console.log("I run on unmount")
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [])

  const handleClick = (e) => {
    const { replace, to, delay, onDelayStart, onDelayEnd, history } = props;
    debugger;

    onDelayStart(e, to);

    if (e.defaultPrevented) {
      return;
    }

    e.preventDefault();

    const newTimeout = setTimeout(() => {
      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
      onDelayEnd(e, to);
    }, delay);

    updateTimeout(newTimeout);
  };

  const passThroughProps = Object.assign({}, props);
  delete passThroughProps.delay;
  delete passThroughProps.onDelayStart;
  delete passThroughProps.onDelayEnd;

  return (
    <Link {...passThroughProps} onClick={handleClick} />
  );
}

DelayLink.propTypes = {
  delay: PropTypes.number,
  onDelayStart: PropTypes.func,
  onDelayEnd: PropTypes.func
};
DelayLink.defaultProps = {
  delay: 0,
  onDelayStart: () => { },
  onDelayEnd: () => { }
};

export default withRouter(DelayLink)