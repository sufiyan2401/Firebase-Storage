// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEO1hve7CEXvV-vRasvE6M_3ALYmn6xjw",
  authDomain: "fir-storage-35317.firebaseapp.com",
  projectId: "fir-storage-35317",
  storageBucket: "fir-storage-35317.appspot.com",
  messagingSenderId: "167597912958",
  appId: "1:167597912958:web:5d09abe1e56ebf8f96f92f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
