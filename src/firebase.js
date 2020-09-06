import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
        apiKey: "AIzaSyCUtbwfeFQuGiG2vrcueK5FbxYu2qHiXYs",
        authDomain: "arjan-messenger.firebaseapp.com",
        databaseURL: "https://arjan-messenger.firebaseio.com",
        projectId: "arjan-messenger",
        storageBucket: "arjan-messenger.appspot.com",
        messagingSenderId: "588405758637",
        appId: "1:588405758637:web:0885dcb9b7d202c4ccc424",
        measurementId: "G-9P7Q23C578"
      
});

const db = firebaseApp.firestore();

export default db;