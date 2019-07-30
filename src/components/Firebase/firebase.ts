import * as firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

interface Firebase {
  auth: any;
}

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.app().auth();
  }

  signInWithEmailAndPassword(email:string, password:string) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    this.auth.signOut();
  }
  this.auth.signOut();
}

export default Firebase;
