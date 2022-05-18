import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCRJtFa0JK6cuppPWFstLIZtRiqitB0TUA",
  authDomain: "crwn-db-d4fb6.firebaseapp.com",
  projectId: "crwn-db-d4fb6",
  storageBucket: "crwn-db-d4fb6.appspot.com",
  messagingSenderId: "390606237883",
  appId: "1:390606237883:web:495b4734092b59f9ac799e",
  measurementId: "G-C01TBZJ7NE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
