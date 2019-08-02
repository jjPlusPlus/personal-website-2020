import { put, takeLatest, all, call } from 'redux-saga/effects';
import { projectsRef, postsRef } from "../components/firebase";

function* fetchProjects() {
  const projects = yield call(function() {
    return new Promise(function(resolve, reject) {
      projectsRef.once('value', function (snap) {
        const values = Object.entries(snap.val()).map(e => Object.assign(e[1], { key: e[0] }));
        resolve(values);
      })
    })
  })
  yield put({ type: "PROJECTS_RECEIVED", payload: { projects: projects }});
}

function* fetchPosts() {
  const posts = yield call(function() {
    return new Promise(function(resolve, reject) {
      postsRef.once('value', function (snap) {
        const values = snap.val() ? Object.entries(snap.val()).map(e => Object.assign(e[1], { key: e[0] })) : [];
        resolve(values);
      })
    })
  })
  yield put({ type: "POSTS_RECEIVED", payload: { posts: posts }});
}

function* watchProjects() {
  yield takeLatest('FETCH_PROJECTS', fetchProjects)
}
function* watchPosts() {
  yield takeLatest('FETCH_POSTS', fetchPosts)
}

export default function* rootSaga() {
  yield all([
    watchProjects(),
    watchPosts()
  ]);
}
