import firebase from 'firebase/app'
import 'firebase/firestore'

/*

const firebaseConfig = {
    apiKey: "AIzaSyANUjkwOAR3Ce66Kb87vHtd_gES2HZED1A",
    authDomain: "restaurants-8bad5.firebaseapp.com",
    projectId: "restaurants-8bad5",
    storageBucket: "restaurants-8bad5.appspot.com",
    messagingSenderId: "763173616565",
    appId: "1:763173616565:web:4b06b6c0ee566bb7d3b7fc"
}




*/ 

const firebaseConfig = {
    apiKey: "AIzaSyAU5jKqvLnOUyIYcZsFjxY5erTMMlWESB4",
    authDomain: "restaurants-78e06.firebaseapp.com",
    projectId: "restaurants-78e06",
    storageBucket: "restaurants-78e06.appspot.com",
    messagingSenderId: "679169855167",
    appId: "1:679169855167:web:302ae6fba413877734000a"
  }


export const firebaseApp = firebase.initializeApp(firebaseConfig)
