
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import App from "../App";

const firebaseConfig = {
  apiKey: "AIzaSyB0aPAFytRoXuG_itMTBQxjy2oqQPoR-QE",
  authDomain: "netflix-clone-27e0e.firebaseapp.com",
  projectId: "netflix-clone-27e0e",
  storageBucket: "netflix-clone-27e0e.appspot.com",
  messagingSenderId: "896436526649",
  appId: "1:896436526649:web:eab8c1c33bd2e192aaf7e8",
  measurementId: "G-FCM4TVY19W"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(App)