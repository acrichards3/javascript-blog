// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider, } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB0T9UVeJN1thMjvmoY4uAmFFPg7-uKazM',
  authDomain: 'javascriptblog-dbd9b.firebaseapp.com',
  projectId: 'javascriptblog-dbd9b',
  storageBucket: 'javascriptblog-dbd9b.appspot.com',
  messagingSenderId: '259401980903',
  appId: '1:259401980903:web:7dd9c791e1dc20e78dfb42',
  measurementId: 'G-S11Q1P3LTR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
