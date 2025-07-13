import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAWyelN3YFsFIG2hgcpp-VpWTXNijVhrEY",

  authDomain: "unidesagency-97d68.firebaseapp.com",

  projectId: "unidesagency-97d68",

  storageBucket: "unidesagency-97d68.firebasestorage.app",

  messagingSenderId: "819819628358",

  appId: "1:819819628358:web:bed6e4a9de210dd6590747"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

