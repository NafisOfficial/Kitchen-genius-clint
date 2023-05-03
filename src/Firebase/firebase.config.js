// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4i4XlXXYGwG8Q3hBLCitTheoZL8d_X_U",
  authDomain: "kitchen-genius-9adb2.firebaseapp.com",
  projectId: "kitchen-genius-9adb2",
  storageBucket: "kitchen-genius-9adb2.appspot.com",
  messagingSenderId: "231298222390",
  appId: "1:231298222390:web:86e03f7fbeb38de568cb97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app