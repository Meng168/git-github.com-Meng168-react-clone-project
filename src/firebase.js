
import firebase from 'firebase'
import "firebase/messaging";
//v8
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkr8G4xeIYP6s_FubnP8DbJ6zysorbC6Q",
    authDomain: "react-clone-email.firebaseapp.com",
    projectId: "react-clone-email",
    storageBucket: "react-clone-email.appspot.com",
    messagingSenderId: "1084319542604",
    appId: "1:1084319542604:web:23d3c0d42818ceef7db3e9"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };