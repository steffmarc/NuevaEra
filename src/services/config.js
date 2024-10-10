import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVPH8o7o7fE5mZwqU_0o4C1N9ATy2jtRc",
  authDomain: "nuevaera-83ab5.firebaseapp.com",
  projectId: "nuevaera-83ab5",
  storageBucket: "nuevaera-83ab5.appspot.com",
  messagingSenderId: "1039446871289",
  appId: "1:1039446871289:web:e7b247722ddefdf8d8a628"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

