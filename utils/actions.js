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

export const registerUser = async (email,password) =>{
  //asumo que si se pudo registrar el usuario y que no hay errores
  const result = {statusResponse: true ,error: null}
  try {
    //valido el correo del usuario
    await firebase.auth().createUserWithEmailAndPassword(email, password)
  } catch (error) {
    //el unico motivo por el que podria fallar es porque el correo ya esta registrado (se asume)
    result.error="Este correo ya esta registrado !"
  }
  return result
}

export const closeSession = ()=>{
  return firebase.auth().signOut()
}

//Indica si un usuario esta logueado o no
export const getCurrentUser = ()=>{
  return firebase.auth().currentUser
}

