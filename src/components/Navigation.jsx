import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <h2>What do you want?</h2>
      <Link to="/projects">I want to see JJ's fucking projects</Link>
      <Link to="/posts">I want to read JJ's fucking articles</Link>
      <Link to="/about">I want to know who the fuck JJ is</Link>
      <Link to="/site">I want to know why this website is so fucking confusing</Link>
      <Link to="/admin">I want to make fucking changes</Link>
    </div>
  );
}

export default Navigation;
