import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { isUserLogged } from '../../utils/actions'
import UserLogged from './UserLogged'
import UserGuest from './UserGuest'

//2 hook de estado --> UseState para saber si el usario esta loggeado y UseEfect para que cuando
//la pantalla cargue lo primero que haga es verificar si el usuario esta logeado o no.

export default function Account() {
  //se asume que el usuario no esta logeado 
  const [login, setlogin] = useState(null)  
  //cuando cargue la pantalla entonces se pregunta si el usuario esta logueado o no
  useEffect(() => {
    setlogin(isUserLogged())
  },[])

  if (login == null){
    return <Text> Cargando ...</Text>
  }
  
  return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})