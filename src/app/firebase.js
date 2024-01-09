// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore, collection } from 'firebase/firestore';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getDocs,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const app = initializeApp ({
  apiKey: "AIzaSyAJ8d4OX0Zx6PsHBIAstYXwBCv0cIhV84Q",
  authDomain: "psychosite-2df8d.firebaseapp.com",
  projectId: "psychosite-2df8d",
  storageBucket: "psychosite-2df8d.appspot.com",
  messagingSenderId: "123966591592",
  appId: "1:123966591592:web:a707adf26df38fbf1b21dd"
});

export const db = getDatabase();
// export const storage = getStorage(app);
// export const colletionRef = collection(db, 'song');
// getDocs(colletionRef)
//         .then((snapshot)=>{
//             console.log(snapshot.docs)
//         })
export default db;