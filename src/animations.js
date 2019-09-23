import { teal200, blue500, orange500, red500, lime500, deepPurple500, blueGray50  } from './material-colors';
import { matchPath } from "react-router-dom";

export const play = (pathname, node, appears) => {
  if (pathname === '/') {
    document.body.style.background = "#000";
    document.body.className = '';
    document.body.classList.add('landing');
    node.children[0].classList.add('animatePageIn');
    setTimeout(() => {
      node.children[0].classList.remove('animatePageIn');
    }, 333)
  } else if (pathname === '/app') {
    document.body.style.background = teal200;
    document.body.className = '';
    document.body.classList.add('navigation');
    node.children[0].classList.add('animatePageIn');
    setTimeout(() => {
      node.children[0].classList.remove('animatePageIn');
    }, 333)
  } else if (pathname === '/posts') {
    document.body.style.background = blue500;
    document.body.className = '';
    document.body.classList.add('posts');
    node.children[0].classList.add('animatePageIn');
    setTimeout(() => {
      node.children[0].classList.remove('animatePageIn');
    }, 333)
  } else if (pathname === '/projects') {
    document.body.style.background = deepPurple500;
    document.body.className = '';
    document.body.classList.add('projects');
    node.children[0].classList.add('animatePageIn');
    setTimeout(() => {
      node.children[0].classList.remove('animatePageIn');
    }, 333)
  } else if (matchPath(pathname, { path: `/posts/:postId`, })) {
    document.body.style.background = blueGray50;
    node.children[0].classList.add('animatePageIn');
    setTimeout(() => {
      node.children[0].classList.remove('animatePageIn');
    }, 333)
  } else if (matchPath(pathname, { path: `/projects/:projectId`, })) {
    document.body.style.background = blueGray50;
    node.classList.add('animatePageIn');
    setTimeout(() => {
      node.classList.remove('animatePageIn');
    }, 333)
  } else if (pathname === '/about') {
    document.body.style.background = lime500;
    node.classList.add('animatePageIn');
    setTimeout(() => {
      node.classList.remove('animatePageIn');
    }, 333)
  } else if (pathname === '/site') {
    document.body.style.background = red500;
    node.classList.add('animatePageIn');
    setTimeout(() => {
      node.classList.remove('animatePageIn');
    }, 333)
  } else if (pathname === '/admin') {
    document.body.style.background = orange500;
    node.classList.add('animatePageIn');
    setTimeout(() => {
      node.classList.remove('animatePageIn');
    }, 333)
  } else if (pathname.includes('/admin/dashboard')) {
    document.body.style.background = blueGray50;
  }
}

export const exit = (node) => {

}
