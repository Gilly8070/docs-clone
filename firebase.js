import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCp3-f2xbKZNNaDTpT5ZmWq_tsHt0D145k",
    authDomain: "docs-clone-16377.firebaseapp.com",
    projectId: "docs-clone-16377",
    storageBucket: "docs-clone-16377.appspot.com",
    messagingSenderId: "496109721948",
    appId: "1:496109721948:web:d229df2cba9a7ca0b98999",
    measurementId: "G-NDKGV116VG"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db };