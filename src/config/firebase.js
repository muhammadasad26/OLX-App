import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAMzaCkE62zU5ss1tKjRTfMEeOb1yUpW30",
  authDomain: "olx-app-a204d.firebaseapp.com",
  databaseURL: "https://olx-app-a204d.firebaseio.com",
  projectId: "olx-app-a204d",
  storageBucket: "olx-app-a204d.appspot.com",
  messagingSenderId: "981735553745",
  appId: "1:981735553745:web:05b9a9261a2ad63a1663f0",
  measurementId: "G-75572XW8FR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;