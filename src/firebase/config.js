import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC6wpCMP1mrPRlhlo5XND5jzU4PFIEK-FI",
  authDomain: "firegram-ab28a.firebaseapp.com",
  databaseURL: "https://firegram-ab28a.firebaseio.com",
  projectId: "firegram-ab28a",
  storageBucket: "firegram-ab28a.appspot.com",
  messagingSenderId: "129735229665",
  appId: "1:129735229665:web:46af8da85d845d2245b7a0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
