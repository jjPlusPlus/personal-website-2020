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

firebase.initializeApp(config);

const database = firebase.database().ref();
export default database;

export const projectsRef = database.child("projects");
export const postsRef = database.child("posts");
