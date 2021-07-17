import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyDhttSE_5VVJvDgx9xYJoTeRl5rwIeVQlg",
  authDomain: "test-lae-9293c.firebaseapp.com",
  projectId: "test-lae-9293c",
  storageBucket: "test-lae-9293c.appspot.com",
  messagingSenderId: "800255704443",
  appId: "1:800255704443:web:dd5800bb0fcab3f78951de",
});

export default app;
