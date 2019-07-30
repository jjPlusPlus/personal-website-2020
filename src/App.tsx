import React from 'react';
import './app.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Projects from './components/Projects';
import About from './components/About';
import Site from './components/Site';
import Admin from './components/Admin';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Navigation} />
      <Route path="/posts" component={Posts} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/site" component={Site} />
      <Route path="/admin" component={Admin} />
    </Router>
  );
}

export default App;
