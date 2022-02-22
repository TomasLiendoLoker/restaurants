
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Favorites from '../screens/Favorites'
//Creamos un stack de navegacion
const Stack = createStackNavigator()

export default function FavoritesStack() {
  return (
   //cremos una pantalla por stack de navegacion
   <Stack.Navigator>
       <Stack.Screen
       name="favorites"
       component={Favorites}
       options={{title: "Favoritos"}}/>
   </Stack.Navigator>
  )
}