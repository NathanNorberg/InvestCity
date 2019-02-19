import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUEmAM5tkECnlRTK_5k77uItKKgI-zIZs",
    authDomain: "investcitycapstone.firebaseapp.com",
    databaseURL: "https://investcitycapstone.firebaseio.com",
    projectId: "investcitycapstone",
    storageBucket: "investcitycapstone.appspot.com",
    messagingSenderId: "1050640035854"
  };
// test

  firebase.initializeApp(config);

  firebase.firestore().settings(settings);

  export default firebase;
