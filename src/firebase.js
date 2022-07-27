import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBW06dy13mJwa4LcQWnJEA8O3JsYSwFJq4",
  authDomain: "build-disney-app.firebaseapp.com",
  projectId: "build-disney-app",
  storageBucket: "build-disney-app.appspot.com",
  messagingSenderId: "75993648555",
  appId: "1:75993648555:web:27a26f1b7f6ddb430456ee",
  measurementId: "G-JV9GZN62F8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const analytics = getAnalytics(app);


export { auth ,provider,storage};
export default db;
