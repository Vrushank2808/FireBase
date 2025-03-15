// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3SttxtKJ7tTxT-Pdo_-aqnxtcAHmCr6A",
  authDomain: "fir-616ce.firebaseapp.com",
  projectId: "fir-616ce",
  storageBucket: "fir-616ce.firebasestorage.app",
  messagingSenderId: "378195264909",
  appId: "1:378195264909:web:2b7549ab947aad426e29c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
