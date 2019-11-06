import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Basic firebase configuration linking web application to database - see firebase documentation

const firebaseConfig = {
  apiKey: "AIzaSyDDiadFydvDp9k30AadQGPCltYl5SLDbr4",
  authDomain: "top-trumps-4e965.firebaseapp.com",
  databaseURL: "https://top-trumps-4e965.firebaseio.com",
  projectId: "top-trumps-4e965",
  storageBucket: "top-trumps-4e965.appspot.com",
  messagingSenderId: "572845719893",
  appId: "1:572845719893:web:2c51779c80844c58"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

// Exporting connection to provider for google signin
export const provider = new firebase.auth.GoogleAuthProvider();

// Exporting connection to database as a variable
export const firestore = firebase.firestore();

firestore.enablePersistence().catch(function(err) {
  console.log("Failed firestore offline cache: " + err.code);
});

export const storage = firebase.storage();

export default firebase;
