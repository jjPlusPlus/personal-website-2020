import { put, takeLatest, all } from 'redux-saga/effects';
import Firebase from "../components/firebase";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchProjects() {
  yield projects.on("value", snapshot => {
    console.log(snapshot.val());
    put({ type: "PROJECTS_RECEIVED" });
  });
}

function* actionWatcher() {
  yield takeLatest('FETCH_PROJECTS', fetchProjects)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
