import * as firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCRv5qyfnUmRum9j3lRM7_H3yCEJfs1JoQ",
  authDomain: "jjplusplus-461d4.firebaseapp.com",
  databaseURL: "https://jjplusplus-461d4.firebaseio.com",
  projectId: "jjplusplus-461d4",
  storageBucket: "jjplusplus-461d4.appspot.com",
  messagingSenderId: "231783917190",
  appId: "1:231783917190:web:fec65fb7b2a5bba0"
};

class Firebase {
  constructor() {
    this.ref = firebase.initializeApp(config);
    this.db = app.database();
  }

  signInWithEmailAndPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    this.auth.signOut();
  }
  getProjects() {
    const projects = this.db.ref().child("projects");
    // projects.on("value", (snapshot:any) => {
    //   this.props.fetchPosts(snapshot);
    // });
    return projects;
  }
  projects = () => this.db.ref('projects');
}

export default Firebase;
