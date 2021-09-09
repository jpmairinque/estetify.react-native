import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCDYbhLhDN0w8geKncFMo19PvE8o-Gp0YQ",
    authDomain: "estetify-a8538.firebaseapp.com",
    projectId: "estetify-a8538",
    storageBucket: "estetify-a8538.appspot.com",
    messagingSenderId: "685246785792",
    appId: "1:685246785792:web:37a5e16244978aa4f2abe5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.firestore()