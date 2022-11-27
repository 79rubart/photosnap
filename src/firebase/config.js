import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaX12n1s-y0t677v2FcbmwEDkIaXNKNsI",
  authDomain: "photosnap-42232.firebaseapp.com",
  projectId: "photosnap-42232",
  storageBucket: "photosnap-42232.appspot.com",
  messagingSenderId: "248904360011",
  appId: "1:248904360011:web:872b57eae331a84244adce",
  measurementId: "G-ZKBB8RZ37G"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {db, storage}