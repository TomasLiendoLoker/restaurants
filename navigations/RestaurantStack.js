
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Restaurants from '../screens/Restaurants'
//Creamos un stack de navegacion
const Stack = createStackNavigator()

export default function RestaurantStack() {
  return (
   //cremos una pantalla por stack de navegacion
   <Stack.Navigator>
       <Stack.Screen
       name="restaurants"
       component={Restaurants}
       options={{title: "Restaurantes"}}
       />
   </Stack.Navigator>
  )
}