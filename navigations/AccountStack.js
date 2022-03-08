
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Account from '../screens/account/Account'
//Creamos un stack de navegacion
const Stack = createStackNavigator()

export default function AccountStack() {
  return (
   //cremos una pantalla por stack de navegacion
   <Stack.Navigator>
       <Stack.Screen
       name="account"
       component={Account}
       options={{title: "Cuenta"}}
       />
   </Stack.Navigator>
  )
}