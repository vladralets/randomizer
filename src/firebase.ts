// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGrmOhtiG4VcohGMwcpwtlyYjvYto2G-8",
    authDomain: "interview-preparation-794e3.firebaseapp.com",
    projectId: "interview-preparation-794e3",
    storageBucket: "interview-preparation-794e3.firebasestorage.app",
    messagingSenderId: "256058081708",
    appId: "1:256058081708:web:7c041508dd793174117a09"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
