
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDPB1dHzcPwNvP8vzU1NPCHY6F2JfzOeG8",
  authDomain: "maltimart-86781.firebaseapp.com",
  projectId: "maltimart-86781",
  storageBucket: "maltimart-86781.appspot.com",
  messagingSenderId: "77720208930",
  appId: "1:77720208930:web:d537152731be8c5db6ec7b",
  measurementId: "G-YETJLT51CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
// const analytics = getAnalytics(app);

export default app