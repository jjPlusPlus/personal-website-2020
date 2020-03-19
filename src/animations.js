import { orange500, lime500, blueGray50 } from 'material-colors';
import { matchPath } from "react-router-dom";

export const play = (pathname, node, appears) => {
  if (!node || !node.children || !node.children[0]) { return; }
  if (pathname === '/') { 
    document.body.style.background = "#111";
    document.body.className = '';
    document.body.classList.add('home');
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
  } else if (pathname === '/admin') {
    document.body.style.background = orange500;
    node.classList.add('animatePageIn');
    setTimeout(() => {
      node.classList.remove('animatePageIn');
    }, 333)
  } else if (pathname.includes('/admin/dashboard')) {
    document.body.style.background = blueGray50;
  } else {
    document.body.style.background = "#FFF";
  }
}

export const exit = (node) => {

}
