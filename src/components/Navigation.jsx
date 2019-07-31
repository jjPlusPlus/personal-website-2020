import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <h2>What do you want?</h2>
      <Link to="/projects">I want to see JJ's projects</Link>
      <Link to="/posts">I want to read JJ's posts</Link>
      <Link to="/about">Who the !@*$#&% is JJ?</Link>
      <Link to="/site">This website is confusing</Link>
      <Link to="/admin">This is my website</Link>
    </div>
  );
}

export default Navigation;
