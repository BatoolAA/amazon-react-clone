import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBnRRhn8mnP2_6VgJFb-duoO-2UlbJ0ETA",
    authDomain: "clone-bt.firebaseapp.com",
    databaseURL: "https://clone-bt.firebaseio.com",
    projectId: "clone-bt",
    storageBucket: "clone-bt.appspot.com",
    messagingSenderId: "469684449472",
    appId: "1:469684449472:web:e21226b30ac513abcefd25",
    measurementId: "G-WL151649M4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };