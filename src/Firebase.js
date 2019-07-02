import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDs8zqlr7aB1ofj1-HZX3mdvzL6Mv-FvG8",
    authDomain: "logmein-46c49.firebaseapp.com",
    databaseURL: "https://logmein-46c49.firebaseio.com",
    projectId: "logmein-46c49",
    storageBucket: "",
    messagingSenderId: "310451911342",
    appId: "1:310451911342:web:679932b094ebc6cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;