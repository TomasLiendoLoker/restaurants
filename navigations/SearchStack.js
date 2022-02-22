import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Search from '../screens/Search'

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    //cremos una pantalla por stack de navegacion
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Search}
        options={{ title: "Buscar" }}
      />
    </Stack.Navigator>
  );
}
