import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyA9eOsNB3i5qycD_MQ1pzVea52fvOD0EDc",
    authDomain: "whatsapp-clone-ca7c3.firebaseapp.com",
    projectId: "whatsapp-clone-ca7c3",
    storageBucket: "whatsapp-clone-ca7c3.appspot.com",
    messagingSenderId: "1004697275517",
    appId: "1:1004697275517:web:6dcfce7cd3fa97104f7514",
    measurementId: "G-BX3SLSFRHC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;