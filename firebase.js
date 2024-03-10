/**  below code is related to realtime database
import 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBv0nVECCv8w9Iy1wwIiuhB8S8p5e5JggI",
  authDomain: "spicy-blog-hunter.firebaseapp.com",
  projectId: "spicy-blog-hunter",
  storageBucket: "spicy-blog-hunter.appspot.com",
  messagingSenderId: "219278487576",
  appId: "1:219278487576:web:c6b0e369bf1fba1d14136d",
  measurementId: "G-MELK8M4ECG",
  databaseUrl:"https://spicy-blog-hunter-default-rtdb.firebaseio.com/"
};

export const app=initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const database = getDatabase(app);

 **/



 //config related to firebase store
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCuVUnVVHB0gJF6KBMQvMoqa947PDCW3xI",
  authDomain: "blogging-website-da41c.firebaseapp.com",
  projectId: "blogging-website-da41c",
  storageBucket: "blogging-website-da41c.appspot.com",
  messagingSenderId: "989490959955",
  appId: "1:989490959955:web:2445de560846e9233918a6",
  measurementId: "G-8CF5YTYLXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);