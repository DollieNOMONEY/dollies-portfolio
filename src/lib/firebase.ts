
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBXfWeTPEYp0ieBCkF9r2YwjNOPbxTdZgY",
  authDomain: "web-application-002.firebaseapp.com",
  projectId: "web-application-002",
  storageBucket: "web-application-002.firebasestorage.app",
  messagingSenderId: "154757199783",
  appId: "1:154757199783:web:298e5f22af0baf3d66e882",
  measurementId: "G-ZCWVFB9XJB"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);