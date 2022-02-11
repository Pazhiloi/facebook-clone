import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-qfdSEUF-KxgJTTxKvsfGY8zhkiGyybo",
  authDomain: "facebook-clone-d2561.firebaseapp.com",
  projectId: "facebook-clone-d2561",
  storageBucket: "facebook-clone-d2561.appspot.com",
  messagingSenderId: "1062252090328",
  appId: "1:1062252090328:web:37f89d3a47cb596dfcd8ad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };

export default db;