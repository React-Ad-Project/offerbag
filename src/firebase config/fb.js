import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCdqMPXszM7IIhqdjlhDP-iBSq1WcOyQQg",
  authDomain: "offer-bag-c0097.firebaseapp.com",
  databaseURL: "https://offer-bag-c0097.firebaseio.com",
  projectId: "offer-bag-c0097",
  storageBucket: "offer-bag-c0097.appspot.com",
  messagingSenderId: "157470202874",
  appId: "1:157470202874:web:b8bd052bb0b63d5987e243",
  measurementId: "G-5TWR245K55"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const storage=firebase.storage();


export { firebase };

export default app;