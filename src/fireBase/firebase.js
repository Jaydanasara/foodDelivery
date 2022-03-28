// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgrtcXRDoF4cnk2S0JqMjLRysLtVKGxa8",
  authDomain: "bakedgoodz-436d8.firebaseapp.com",
  projectId: "bakedgoodz-436d8",
  storageBucket: "bakedgoodz-436d8.appspot.com",
  messagingSenderId: "529770866360",
  appId: "1:529770866360:web:02896ebe482ccf387cb64d",
  measurementId: "G-HM0BXMZ1RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);

