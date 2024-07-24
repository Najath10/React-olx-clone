import firebase from "firebase";
import  "firebase/auth";
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoQLCMM_C-en3MiiJeqavoR6gqIFg5apQ",
    authDomain: "react-olx-9620e.firebaseapp.com",
    projectId: "react-olx-9620e",
    storageBucket: "react-olx-9620e.appspot.com",
    messagingSenderId: "22590000834",
    appId: "1:22590000834:web:6e7b8d8ca16128ada5755b",
    measurementId: "G-QQ19GVZRY7"
  };
  export default  firebase.initializeApp(firebaseConfig)