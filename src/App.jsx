import React from 'react';
import './app.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import configureStore from './store';

import Navigation from './components/Navigation';
import Posts from './components/pages/Posts';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Site from './components/pages/Site';
import Admin from './components/pages/Admin';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Route path="/" exact component={Navigation} />
        <Route path="/posts" component={Posts} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/site" component={Site} />
        <Route path="/admin" component={Admin} />
      </Router>
    </Provider>
  );
}

export default App;
