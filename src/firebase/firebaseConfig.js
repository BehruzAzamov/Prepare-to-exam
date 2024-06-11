import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1Uu4diP7l9zFzFMbDDlrAmeWmWNjYJ_A",
  authDomain: "exam-test-8a72f.firebaseapp.com",
  projectId: "exam-test-8a72f",
  storageBucket: "exam-test-8a72f.appspot.com",
  messagingSenderId: "825534538325",
  appId: "1:825534538325:web:a07d71d1f2ab8d198a2adc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);