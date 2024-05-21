// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth"
import { getStorage} from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0l5x79moaYy3xtjk98cFQICUZrU0USNM",
  authDomain: "blogtutorial-a3490.firebaseapp.com",
  projectId: "blogtutorial-a3490",
  storageBucket: "blogtutorial-a3490.appspot.com",
  messagingSenderId: "14273397503",
  appId: "1:14273397503:web:d35e66236946d2d58642ca",
  measurementId: "G-JZ327H80NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage}