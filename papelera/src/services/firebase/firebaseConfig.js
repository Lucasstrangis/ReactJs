import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBtU9LFgbmS13gs37y_8futM4SEczRsxQs",
  authDomain: "ecommerce-994c2.firebaseapp.com",
  projectId: "ecommerce-994c2",
  storageBucket: "ecommerce-994c2.appspot.com",
  messagingSenderId: "720005114256",
  appId: "1:720005114256:web:79b4c8889ca4d2fd86ab15"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)