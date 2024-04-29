// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEbNU--vPO6R80HCgiT9ezyt_qj65dCAg",
  authDomain: "react-course-social-medi-1f83a.firebaseapp.com",
  projectId: "react-course-social-medi-1f83a",
  storageBucket: "react-course-social-medi-1f83a.appspot.com",
  messagingSenderId: "1022079433888",
  appId: "1:1022079433888:web:53f5952da5b85e5056ddc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()