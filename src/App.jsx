import React, { Component } from 'react';
import 'app.scss';

import ReactGA from 'react-ga';

import { Route, Redirect, Switch } from "react-router-dom";
import { play, exit } from "animations";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from 'pages/Home';

import ResourcePage from 'pages/ResourcePage';

import Admins from 'pages/Admins';

import Dashboard from 'pages/admin/Dashboard';
import AdminPosts from 'pages/admin/Posts';
import PostEditor from 'pages/admin/PostEditor';
import AdminProjects from 'pages/admin/Projects';
import ProjectEditor from 'pages/admin/ProjectEditor';

import ProtectedRoute from 'components/ProtectedRoute';

const trackingId = "149202297";
ReactGA.initialize(trackingId);

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
                <Route path="/" exact component={Home} />

                <Route path="/posts/:id" component={ResourcePage} />
                <Route path="/projects/:id" component={ResourcePage} />

                <Route exact path="/admin" component={Admins} />
                  <ProtectedRoute exact path="/admin/dashboard" component={Dashboard}/>
                    <ProtectedRoute exact path="/admin/dashboard/posts" component={AdminPosts} />
                      <ProtectedRoute path="/admin/dashboard/posts/:id" component={ (props) => <PostEditor {...props} /> } />
                    <ProtectedRoute exact path="/admin/dashboard/projects" component={AdminProjects} />
                      <ProtectedRoute path="/admin/dashboard/projects/:id" component={ProjectEditor} />
                <Redirect to="/" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )
      }}/>
    );
  }
}

export default App;
