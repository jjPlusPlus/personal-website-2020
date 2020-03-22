import React, { useState, useMemo, useEffect } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { useFirebaseConnect } from 'react-redux-firebase';

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

/*
import whyDidYouRender from "@welldone-software/why-did-you-render";

whyDidYouRender(React, { 
  include: [/^HomePage/],
  titleColor: "#007aff",
  diffNameColor: "#7a00ff",
  diffPathColor: "ff7a00" 
});
*/

const HomePage = props => {
  useFirebaseConnect('posts')
  useFirebaseConnect('projects')
  useFirebaseConnect('tags')

  const [delaying, isDelaying] = useState(false)
  const [animating, isAnimating] = useState(false)

  const [sortedProjects, setSortedProjects] = useState(null)
  const [sortedPosts, setSortedPosts] = useState(null)

  const [selected, setSelected] = useState(null)

  const delaySetSelected = (item, resource) => {
    isAnimating(true)
    setTimeout(() => {
      updateSelected(item, resource)
      isAnimating(false)
    }, 333)
  }

  const updateSelected = (item, resource) => {
    if (selected && selected.item === item) {
      // deselect the item 
      setSelected(null)
    } else {
      animateScrollTo(0)
      setSelected( { item, resource })
    }
  }

  let { posts, projects, tags } = props

  useEffect(() => {
    if (projects) {
      const formattedProjects = Object.keys(projects).map((project) => {
        const resource = projects[project];
        if (resource) {
          resource.key = project;
          return resource
        } else {
          return null;
        }
      })
      setSortedProjects(_.sortBy(formattedProjects, "index"))
    }

    if (posts) {
      const formattedPosts = Object.keys(posts).map((post) => {
        const resource = posts[post]
        if (resource) {
          resource.key = post
          return resource
        } else {
          return null
        }
      })
      setSortedPosts(_.sortBy(formattedPosts, "index"))
    }
  }, [projects, posts])  

  // sort the object by key using Lodash

  return (
    <div>
      <div className="v2">
        <div className="top-bar">
          <div className="top-bar-content flex flex-row flex-center">
            <p className="affirmations flex flex-1">JJ &nbsp; <Affirmations /></p>
            <DelayLink delay = { 333 } to = "/admin" className="v2-admin-link" onDelayStart = { () => isDelaying(true)}>
              <p>Admin</p>
            </DelayLink>
          </div>
        </div>

        <div className="home-page">
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
                    <DelayLink 
                      delay={333} 
                      className="watch-now-button" 
                      onDelayStart={() => isDelaying(true)} 
                      to={{
                        pathname: `${selected.resource}/${selected.item.key}`, 
                        state: { 
                          resource: selected
                        }
                      }}  
                    >
                      <p>WATCH NOW</p>
                    </DelayLink>
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
            {sortedProjects && sortedProjects.length ? (
              <HomeSlider items={sortedProjects} resource="projects" selected={selected} setSelected={(item, type) => delaySetSelected(item, type)}/>
            ) : null }
          </section>

          <section className="posts-display">
            <h1 className="section-title"><StringGlitch interval={4000} text="POSTS" /></h1>
            {sortedPosts && sortedPosts.length ? (
              <HomeSlider items={sortedPosts} resource="posts" selected={selected} setSelected={(item, type) => delaySetSelected(item, type)}/>
            ) : null}
          </section>

          <section className="about">
            <h1 className="section-title">WHO IS JJ</h1>
            <About />
          </section>
        </div>
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
  )
}

// HomePage.whyDidYouRender = true;

export default compose(
  connect((state) => ({
    posts: state.firebase.data.posts,
    projects: state.firebase.data.projects,
    tags: state.firebase.data.tags
  }))
)(HomePage)
