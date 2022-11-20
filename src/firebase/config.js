import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxP0hxcnkxk0Efbjv4KymDNrf5q9ZDhd8",
    authDomain: "photosnapgallery.firebaseapp.com",
    projectId: "photosnapgallery",
    storageBucket: "photosnapgallery.appspot.com",
    messagingSenderId: "40224944884",
    appId: "1:40224944884:web:3cee34d52c52f8ae5724a1",
    measurementId: "G-PWKZLH3CY8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
