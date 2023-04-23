// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATZf33jDx4_x_eYl_20Lv8P7aWHvLjIE4",
  authDomain: "tiktok-jornada-82139.firebaseapp.com",
  projectId: "tiktok-jornada-82139",
  storageBucket: "tiktok-jornada-82139.appspot.com",
  messagingSenderId: "946156837693",
  appId: "1:946156837693:web:e8b9c892ada2b0a5118354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;