import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import DelayLink from "components/DelayLink";

import HomeSlider from 'components/HomeSlider';

import Affirmations from 'components/Affirmations';
import StringGlitch from 'components/StringGlitch';

import About from 'pages/About';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import animateScrollTo from 'animated-scroll-to';

import _ from 'lodash';
import Imgix from "react-imgix";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delaying: null,
      selected: null,
      detail: null,
      showMain: true,
      animating: false,
    }
  }
  delayStart = () => {
    this.setState({
      delaying: true,
    })
  }

  delaySetSelected(item, resource) {
    this.setState({ animating: true });
    setTimeout(() => {
      this.setSelected(item, resource);
      this.setState({animating: false});
    }, 333)
  }

  setSelected(item, resource) {
    if (this.state.selected && this.state.selected.item === item) {
      // deselect the item 
      this.setState({ selected: null })
    } else {
      animateScrollTo(0);
      this.setState({ selected: { item, resource } });
    }
  }

  render() {
    let { posts, projects, tags } = this.props;
    let { selected, detail, animating } = this.state;
    // sort the object by key using Lodash
    projects = _.sortBy(projects, "index");
    posts = _.sortBy(posts, "index");

    return (
      <div>
        <div className="v2">
          <div className="top-bar">
            <div className="top-bar-content flex flex-row flex-center">
              <p className="affirmations flex flex-1">JJ &nbsp; <Affirmations /></p>
              { detail ? (
                <button onClick={() => this.delayUnsetDetail()} className="v2-close-detail">
                  <p>CLOSE</p>
                </button>
              ) : (
                <DelayLink delay = { 333 } to = "/admin" className = "v2-admin-link" onDelayStart = { () => this.delayStart()}>
                  <p>Admin</p>
                </DelayLink>
              )}
              
            </div>
          </div>

          { detail ? (
              <ResourceDetailModal tags={tags} detail={detail} />
            ) : (
            <div className={ "home-page " + (this.state.showMain ? "visible" : "hidden")}>
              <section className={"header-display " + (animating ? "v2-header-animating" : "")}>
                { selected ? (

                  <span>
                    <Imgix
                      src={selected.item.heroImage}
                      sizes="(min-width: 1280px) 1280px, 100vw"
                      imgixParams={{ ar: "5:2", auto: "format", fit: "crop" }}
                      classNames="full-width"
                    />
                    <div className="header-display--content-wrapper flex flex-column">
                      <div className="header-display--content">
                        <h1>{selected.item.name}</h1>
                        <p>{selected.item.snippet}</p>
                        <div className="header-display--content-tags">
                          { selected.item.tags && selected.item.tags.map((tag, index) => (
                            <div className="tag" key={index} style={{ backgroundColor: tags[tag].bgColor || "#007aff", color: tags[tag].color || '#FFF' }}>
                              <p>{tags[tag].name}</p>
                            </div>
                          ))}
                        </div>
                        <button onClick={() => this.delaySetDetail(selected.item) } className="watch-now-button" >
                          <p>WATCH NOW</p>
                        </button>
                      </div>
                    </div>
                  </span>
                ) : (
                  <span>
                    {/* <HeaderAnimation /> 
                    <div className="image--aspect-wrapper--16-9" style={{ backgroundImage: "url(/jjpp-header-slim.svg)" }}></div>*/}
                    <Imgix
                      src="https://jj-plus-plus.imgix.net/images/jjpp-header-slim.svg"
                      sizes="(min-width: 1280px) 1280px, 100vw"
                      imgixParams={{ ar: "5:2", auto: "format", fit: "crop" }}
                      classNames="full-width"
                    />
                    <h1 className="header-display--title">This is JJ</h1>
                  </span>
                )
                }
              </section>

              <section className="projects-display">
                <h1 className="section-title"> <StringGlitch interval={3000} text="PROJECTS" /> </h1>
                {projects && projects.length ? (
                  <HomeSlider items={projects} resource="projects" selected={selected} setSelected={(item, type) => this.delaySetSelected(item, type)}/>
                ) : null }
              </section>

              <section className="posts-display">
                <h1 className="section-title"><StringGlitch interval={4000} text="POSTS" /></h1>
                {posts && posts.length ? (
                  <HomeSlider items={posts} resource="posts" selected={selected} setSelected={(item, type) => this.delaySetSelected(item, type)}/>
                ) : null}
              </section>

              <section className="about">
                <h1 className="section-title">WHO IS JJ</h1>
                <About />
              </section>
            </div>
          )}
        </div>

        <section className="footer-wrapper flex-center">
          <div className="footer flex">
            <div className="flex-1">
              <div className="flex flex-row icon-links">
                <a href="https://www.linkedin.com/in/jjmedina/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/jjPlusPlus/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.instagram.com/mega094/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>
            <p>2019 JJ++</p>
          </div>
        </section>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(() => [
    'posts',
    'projects',
    'tags'
  ]),
  connect((state) => ({
    posts: state.firebase.data.posts,
    projects: state.firebase.data.projects,
    tags: state.firebase.data.tags
  }))
)(HomePage)
