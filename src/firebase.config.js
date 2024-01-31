import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA2V9Y5w8Y0jhiuS3FY7qmf1zjTrVXfF8M",
  authDomain: "relievemart-da5ea.firebaseapp.com",
  projectId: "relievemart-da5ea",
  storageBucket: "relievemart-da5ea.appspot.com",
  messagingSenderId: "67026900191",
  appId: "1:67026900191:web:2348a2225b0ad34c3cc56a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;