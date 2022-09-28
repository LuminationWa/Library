// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUreXtzlpq6HbYl6L0JXbGXHCtP1H5Xas",
  authDomain: "library-6067c.firebaseapp.com",
  projectId: "library-6067c",
  storageBucket: "library-6067c.appspot.com",
  messagingSenderId: "98433477791",
  appId: "1:98433477791:web:51be0e0612747347e246aa",
  measurementId: "G-SM6YL6FEHF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
