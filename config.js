import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCyGyhzQe2CFDwxUCuvylQOJceRjdu6C88",
  authDomain: "bartersystem-60468.firebaseapp.com",
  projectId: "bartersystem-60468",
  storageBucket: "bartersystem-60468.appspot.com",
  messagingSenderId: "841737416700",
  appId: "1:841737416700:web:4efee12d892677156a4c79"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();