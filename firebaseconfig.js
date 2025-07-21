// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_4xwxdnIwH17a9mdOrixLz-cPhAmQfd4",
  authDomain: "hostel-connect-252d3.firebaseapp.com",
  projectId: "hostel-connect-252d3",
  storageBucket: "hostel-connect-252d3.appspot.com",
  messagingSenderId: "406428488417",
  appId: "1:406428488417:web:f65f0e3b5ca68a8a019da0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth, db,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  onAuthStateChanged,
  collection,
  addDoc,
  getDocs,
  query
};
