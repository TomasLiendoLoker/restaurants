//Conectarse a la BD
import { firebaseApp } from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'


//import { firebaseApp } from './firebase'
//import firebase from "firebase/compat/app"
//import "firebase/compat/auth"
//require('firebase/firestore')

const db = firebase.firestore(firebaseApp)

//import firebase from 'firebase/compat/app';
//import "firebase/auth";
//import "firebase/firestore";



//import { firebaseApp } from './firebase'
//import firebase from 'firebase'
//require('firebase/firestore')


//funcion que nos permite saber si el usuario esta logeeado o no
export const isUserLogged = () =>{
    let isLogged = false
    firebase.auth().onAuthStateChanged((user) =>{
      user !== null && (isLogged = true)  
    })
    return isLogged
}
