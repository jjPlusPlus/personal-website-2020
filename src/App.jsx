import React, { Component } from 'react';
import './app.css';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navigation from './components/Navigation';
import Posts from './components/pages/Posts';
import PostDetail from './components/pages/PostDetail';
import Projects from './components/pages/Projects';
import ProjectDetail from './components/pages/ProjectDetail';
import About from './components/pages/About';
import Site from './components/pages/Site';
import Admin from './components/pages/Admin';

import SignInForm from './components/SignInForm';
import Dashboard from './components/admin/Dashboard';
import AdminPosts from './components/admin/Posts';
import PostEditor from './components/admin/PostEditor';
import AdminProjects from './components/admin/Projects';
import ProjectEditor from './components/admin/ProjectEditor';
import ResumeEditor from './components/admin/ResumeEditor';

import { connect } from 'react-redux';
import * as actions from './actions';
const mapStateToProps = state => ({
  ...state
})
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return (
      props.user
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/admin/login',
            state: { from: props.location }
          }} />
        );
  }} />
)
connect(mapStateToProps, actions)(PrivateRoute)

class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/" exact component={Navigation} />
        <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:id" component={PostDetail} />
        <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={ProjectDetail} />
        <Route path="/about" component={About} />
        <Route path="/site" component={Site} />
        <Route exact path="/admin" component={Admin} />
          <Route path="/admin/login" component={SignInForm} />
          <Route exact path="/admin/dashboard" component={Dashboard}/>
            <Route exact path="/admin/dashboard/posts" component={AdminPosts} />
              <Route path="/admin/dashboard/posts/:id" component={PostEditor} />
            <Route exact path="/admin/dashboard/projects" component={AdminProjects} />
              <Route path="/admin/dashboard/projects/:id" component={ProjectEditor} />
            <Route path="/admin/dashboard/about" component={ResumeEditor} />
      </Router>
    );
  }
}

export default App;
