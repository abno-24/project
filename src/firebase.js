import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUYGA5XvpAGzLkRGQhwz0n5KvZeg5T-vk",
  authDomain: "my-app-2f9d1.firebaseapp.com",
  projectId: "my-app-2f9d1",
  storageBucket: "my-app-2f9d1.firebasestorage.app",
  messagingSenderId: "101935289875",
  appId: "1:101935289875:web:1c9ddd9cd86de44c6b11e6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth };