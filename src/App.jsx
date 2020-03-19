import React, { Component } from 'react';
import 'app.scss';

import ReactGA from 'react-ga';

import { Route, Redirect, Switch } from "react-router-dom";
import { play, exit } from "animations";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from 'pages/Home';

import PostDetail from 'pages/PostDetail';
import ProjectDetail from 'pages/ProjectDetail';

import Admin from 'pages/Admin';

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
                <Route path="/v1" exact component={Navigation} />
                <Route path="/v2" exact component={V2} />

                <Route exact path="/v1/posts" component={Posts} />
                  <Route path="/v1/posts/:id" component={PostDetail} />
                <Route exact path="/v1/projects" component={Projects} />
                  <Route path="/v1/projects/:id" component={ProjectDetail} />
                <Route path="/v1/about" component={About} />
                <Route path="/v1/site" component={Site} />
                <Route exact path="/admin" component={Admin} />
                  <ProtectedRoute exact path="/admin/dashboard" component={Dashboard}/>
                    <ProtectedRoute exact path="/admin/dashboard/posts" component={AdminPosts} />
                      <ProtectedRoute path="/admin/dashboard/posts/:id" component={ (props) => <PostEditor {...props} /> } />
                    <ProtectedRoute exact path="/admin/dashboard/projects" component={AdminProjects} />
                      <ProtectedRoute path="/admin/dashboard/projects/:id" component={ProjectEditor} />
                    <ProtectedRoute path="/admin/dashboard/about" component={ResumeEditor} />
                <Redirect to="/v2" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )
      }}/>
    );
  }
}

export default App;
