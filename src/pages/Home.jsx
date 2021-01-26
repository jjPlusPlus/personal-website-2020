import React, { useState, useMemo, useEffect } from 'react';

import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { useFirebaseConnect } from 'react-redux-firebase';

import DelayLink from "components/DelayLink";

import HomeSlider from 'components/HomeSlider';

import Affirmations from 'components/Affirmations';

import About from 'pages/About';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import _ from 'lodash';
import Imgix from "react-imgix";

const HomePage = props => {
  useFirebaseConnect('posts')
  useFirebaseConnect('projects')
  useFirebaseConnect('tags')

  const posts = useSelector(state => state.firebase.data.posts)
  const projects = useSelector(state => state.firebase.data.projects)
  const tags = useSelector(state => state.firebase.data.tags)

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
      setSelected( { item, resource })
    }
  }

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

  return (
    <div>
      <div className="wrapper">
        <div className="top-bar">
          <div className="top-bar-content flex flex-row flex-center">
            <p className="affirmations flex flex-1">JJ &nbsp; <Affirmations /></p>
          </div>
        </div>

        <div className="home-page">
          {sortedProjects && sortedProjects.length ? (
            <HomeSlider title="PR0JECTS" items={sortedProjects} resource="projects" tags={tags} isDelaying={isDelaying} animating={animating} selected={selected} setSelected={(item, type) => delaySetSelected(item, type)}/>
          ) : null }
          {sortedPosts && sortedPosts.length ? (
            <HomeSlider title="P0STS" items={sortedPosts} resource="posts" tags={tags} isDelaying={isDelaying} animating={animating} selected={selected} setSelected={(item, type) => delaySetSelected(item, type)}/>
          ) : null}
        </div>
      </div>

      <section className="footer-wrapper flex-center">
        <div className="footer flex">
          <div className="flex flex-1 flex-center">
            <div className="flex flex-row icon-links">
              <a href="https://www.linkedin.com/in/jjmedina/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/jjPlusPlus/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.instagram.com/mega094/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
          <p className="attribution flex flex-center">2019 JJ++</p>
          <div className="flex-center">
            <DelayLink delay = { 333 } to = "/admin" className="admin-link" onDelayStart = { () => isDelaying(true)}>
              <p>Admin</p>
            </DelayLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
