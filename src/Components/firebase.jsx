// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import "firebase/compat/storage"
import "firebase/compat/firestore"

// Your web app's Firebase configuration
// Initialize Firebase
 const  firebaseConfig = ({
  projectId: "fotos-26698",
  appId: "1:109243537461:web:09d13f83dfec00a3e0797c",
  databaseURL: "https://fotos-26698-default-rtdb.firebaseio.com",
  storageBucket: "fotos-26698.appspot.com",
  locationId: "southamerica-east1",
  apiKey: "AIzaSyBiqLUPZSzOpUbFTs8ARbka81us03ilnN8",
  authDomain: "fotos-26698.firebaseapp.com",
  messagingSenderId: "109243537461"
});

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app); // Use getStorage to get the Storage instance
export const firestore = getFirestore(app);