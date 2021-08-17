import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDFJJ0haA5ZTebjyXvOTg78TtoAoGfslVE",
    authDomain: "tododaily-3e7cd.firebaseapp.com",
    databaseURL: "https://tododaily-3e7cd-default-rtdb.firebaseio.com",
    projectId: "tododaily-3e7cd",
    storageBucket: "tododaily-3e7cd.appspot.com",
    messagingSenderId: "535167581076",
    appId: "1:535167581076:web:7cb3d2bf4d13bb7d7a2d81",
    measurementId: "G-20TKZRYJBB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;