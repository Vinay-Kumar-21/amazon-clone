// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAae4V8goNEAGYPuKiaxc63TkK4xScbRgE",
    authDomain: "clone-22e9e.firebaseapp.com",
    projectId: "clone-22e9e",
    storageBucket: "clone-22e9e.appspot.com",
    messagingSenderId: "197343516787",
    appId: "1:197343516787:web:ec7f59fd1a1d71bc59f206",
    measurementId: "G-T878WJ9ZMK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };