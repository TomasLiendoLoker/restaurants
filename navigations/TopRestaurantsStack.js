
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import TopRestaurants from '../screens/TopRestaurants'
//Creamos un stack de navegacion
const Stack = createStackNavigator()

export default function TopRestaurantsStack() {
  return (
   //cremos una pantalla por stack de navegacion
   <Stack.Navigator>
       <Stack.Screen
       name="top-restaurants"
       component={TopRestaurants}
       options={{title: "Los mejores restaurantes"}}/>
   </Stack.Navigator>
  )
}