import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD4_Rq2DSle5HvWR42X_B6Gf2cPR2LUozQ",
    authDomain: "investcity-474c2.firebaseapp.com",
    databaseURL: "https://investcity-474c2.firebaseio.com",
    projectId: "investcity-474c2",
    storageBucket: "investcity-474c2.appspot.com",
    messagingSenderId: "256323824756"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
