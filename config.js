import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAcGd4Pr4fbVa0ZED1LRKcjmwm4g88bKyE",
  authDomain: "note-sharing-app-8881e.firebaseapp.com",
  projectId: "note-sharing-app-8881e",
  storageBucket: "note-sharing-app-8881e.appspot.com",
  messagingSenderId: "690634297685",
  appId: "1:690634297685:web:ac0d2d78e79acc99d09fdc",
  measurementId: "G-CW09BK7XQW",
  databaseURL: "https://note-sharing-app-8881e.firebaseio.com" 
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();