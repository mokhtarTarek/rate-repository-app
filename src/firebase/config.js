import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdij5kpXCV38tWIfyvB589IWS6XcFPA74",
  authDomain: "auto-25007.firebaseapp.com",
  projectId: "auto-25007",
  storageBucket: "auto-25007.appspot.com",
  messagingSenderId: "684229484605",
  appId: "1:684229484605:web:008b3ee10c2770dd3c4a54",
  measurementId: "G-CM0JNZ1KPT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
