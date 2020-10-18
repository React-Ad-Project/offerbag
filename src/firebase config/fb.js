import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "@firebase/messaging";
import "@firebase/functions";
import "@firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyBDTYcY82MKfhUqhk6yt5FmxXMy-w7ykVc",
  authDomain: "ad-project-1ad2b.firebaseapp.com",
  databaseURL: "https://ad-project-1ad2b.firebaseio.com",
  projectId: "ad-project-1ad2b",
  storageBucket: "ad-project-1ad2b.appspot.com",
  messagingSenderId: "274371728189",
  appId: "1:274371728189:web:f73446c937690536c0eb54",
  measurementId: "G-KWSZ117CXZ",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const storage=firebase.storage();


export { firebase };

export default app;