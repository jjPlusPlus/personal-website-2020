import { put, takeLatest, all, call } from 'redux-saga/effects';
import firebase, { projectsRef, postsRef } from "../components/firebase";

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

function* authenticateFirebase(action) {
  const credentials = action.payload;
  let result = null;
  let error = null;

  // still feel like this callback-style setup is wrong for sagas...
  yield firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then((res) => {
      result = res;
    })
    .catch(err => {
      error = err;
    });
  if (result) {
    yield put({ type: "USER_AUTHENTICATED", payload: { user: result.user.email }});
  } else if (error) {
    yield put({ type: "AUTHENTICATION_FAILED", payload: { error: error.message }});
  }
}

function* watchProjects() {
  yield takeLatest('FETCH_PROJECTS', fetchProjects)
}
function* watchPosts() {
  yield takeLatest('FETCH_POSTS', fetchPosts)
}
function* authenticate() {
  yield takeLatest('AUTHENTICATE', authenticateFirebase)
}

export default function* rootSaga() {
  yield all([
    watchProjects(),
    watchPosts(),
    authenticate()
  ]);
}
