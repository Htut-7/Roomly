import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDlayJAik0qVCHf8XD-MOlXCrSVMKK0FFw",
  authDomain: "roomly-691f8.firebaseapp.com",
  projectId: "roomly-691f8",
  storageBucket: "roomly-691f8.firebasestorage.app",
  messagingSenderId: "801611784861",
  appId: "1:801611784861:web:f211c596e78a49af5a6a74",
  measurementId: "G-9L5062VE6G"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
const auth = getAuth(app);

export {db,auth}
