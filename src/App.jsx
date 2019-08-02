import React from 'react';
import './app.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import configureStore from './store';

import Navigation from './components/Navigation';
import Posts from './components/pages/Posts';
import PostDetail from './components/pages/PostDetail';
import Projects from './components/pages/Projects';
import ProjectDetail from './components/pages/ProjectDetail';
import About from './components/pages/About';
import Site from './components/pages/Site';
import Admin from './components/pages/Admin';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Route path="/" exact component={Navigation} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={PostDetail} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectDetail} />
        <Route path="/about" component={About} />
        <Route path="/site" component={Site} />
        <Route path="/admin" component={Admin} />
      </Router>
    </Provider>
  );
}

export default App;
