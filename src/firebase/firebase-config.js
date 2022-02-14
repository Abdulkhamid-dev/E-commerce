import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBbP9bfloQJ0oUM1BQwDYwHGE1HC2THoqI",
  authDomain: "e-commerce-ab301.firebaseapp.com",
  projectId: "e-commerce-ab301",
  storageBucket: "e-commerce-ab301.appspot.com",
  messagingSenderId: "278080043551",
  appId: "1:278080043551:web:40b4c4ddd978dc02f9332a",
  measurementId: "G-TYWFY2T636"
};


const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);
