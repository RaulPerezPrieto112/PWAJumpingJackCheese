import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdmEOOcnwE_aDX2HEAfAjjhV-a0lIqlcA",
    authDomain: "pwajack-6c54e.firebaseapp.com",
    projectId: "pwajack-6c54e",
    storageBucket: "pwajack-6c54e.firebasestorage.app",
    messagingSenderId: "161523349874",
    appId: "1:161523349874:web:707e7976c1838ffab645eb",
    measurementId: "G-2RMZQPCH9N"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
