import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { getCurrentUser, isUserLogged } from '../../utils/actions'
import UserLogged from './UserLogged'
import UserGuest from './UserGuest'

import { useFocusEffect } from '@react-navigation/native'
//2 hook de estado --> UseState para saber si el usario esta loggeado y UseEfect para que cuando
//la pantalla cargue lo primero que haga es verificar si el usuario esta logeado o no.

export default function Account() {
  //se asume que el usuario no esta logeado 
  const [login, setlogin] = useState(null)  
  //cuando cargue la pantalla entonces se pregunta si el usuario esta logueado o no
  //UseEffect -> Esa pantalla la carga la 1º vez luego por 2º vez no refresca entonces por eso
  //usamos UseCallback y useFocus Effect
  //Cada vez que cambiamos esta pantalla, se va a cargar el setLogin y nos fijamos si el usario esta logueado o no

  useFocusEffect(
    useCallback(() => {
      const user = getCurrentUser()
      user ? setlogin(true) : setlogin(false)
    },[])
  )

 


  if (login == null){
    return <Text> Cargando ...</Text>
  }
  
  return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})