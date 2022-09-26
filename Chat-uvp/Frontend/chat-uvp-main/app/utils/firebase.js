import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFgp96TDrDagkZge0wvYDVx_UGZHayDs8",
  authDomain: "chat-uvp.firebaseapp.com",
  projectId: "chat-uvp",
  storageBucket: "chat-uvp.appspot.com",
  messagingSenderId: "188689865659",
  appId: "1:188689865659:web:9d22f6e9d76e540413829e",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
