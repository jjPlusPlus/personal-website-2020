import React, { Component } from 'react';
import './app.scss';

import { Route, Redirect, Switch } from "react-router-dom";
import { play, exit } from "./animations";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {

  render() {
    return (
      <Route render={({ location }) => {
        const { pathname, key } = location;

        return (
          <TransitionGroup component={null}>
            <CSSTransition
              key={key}
              appear={true}
              class="fade"
              onEnter={(node, appears) => play(pathname, node, appears)}
              onExit={(node, appears) => exit(node, appears)}
              timeout={{enter: 333, exit: 333}}
            >
              <Switch location={location}>
                <Route path="/" exact component={Navigation} />
                <Route exact path="/posts" component={Posts} />
                  <Route path="/posts/:id" component={PostDetail} />
                <Route exact path="/projects" component={Projects} />
                  <Route path="/projects/:id" component={ProjectDetail} />
                <Route path="/about" component={About} />
                <Route path="/site" component={Site} />
                <Route exact path="/admin" component={Admin} />
                  <ProtectedRoute exact path="/admin/dashboard" component={Dashboard}/>
                    <ProtectedRoute exact path="/admin/dashboard/posts" component={AdminPosts} />
                      <ProtectedRoute path="/admin/dashboard/posts/:id" component={ (props) => <PostEditor {...props} /> } />
                    <ProtectedRoute exact path="/admin/dashboard/projects" component={AdminProjects} />
                      <ProtectedRoute path="/admin/dashboard/projects/:id" component={ProjectEditor} />
                    <ProtectedRoute path="/admin/dashboard/about" component={ResumeEditor} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )
      }}/>
    );
  }
}

export default App;
