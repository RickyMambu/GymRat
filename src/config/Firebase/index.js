// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdaK2J5HzSdzzBlnLU-uuNRwPadYfWE3I",
  authDomain: "gymrat-29262.firebaseapp.com",
  databaseURL: "https://gymrat-29262-default-rtdb.firebaseio.com",
  projectId: "gymrat-29262",
  storageBucket: "gymrat-29262.firebasestorage.app",
  messagingSenderId: "213477217192",
  appId: "1:213477217192:web:36478fad498a62c565439d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
export { database, auth };