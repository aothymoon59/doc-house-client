import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWwolBbMxcybsMzzGkYHqp6oiIQ9_Mtmc",
  authDomain: "doc-house-f03c9.firebaseapp.com",
  projectId: "doc-house-f03c9",
  storageBucket: "doc-house-f03c9.appspot.com",
  messagingSenderId: "604513584940",
  appId: "1:604513584940:web:706dc414b643e6f4738e89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
