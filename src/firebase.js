import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDJVZ-4UjNbG8VWFp47oQYemwi7A0ytShE",
    authDomain: "clicktogreen-dd27c.firebaseapp.com",
    projectId: "clicktogreen-dd27c",
    storageBucket: "clicktogreen-dd27c.appspot.com",
    messagingSenderId: "225226909914",
    appId: "1:225226909914:web:96bc933a09f19316c51de3",
    measurementId: "G-FX9S3D7V5Y"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export{auth, firebase} 