import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Account from "../screens/account/Account";
import Login from "../screens/account/Login";
import Register from "../screens/account/Register";
//Creamos un stack de navegacion
const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    //cremos una pantalla por stack de navegacion
    //Agregamos para navegar a otra pantalla como login
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar Sesion" }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registrar Usuario" }}
      />
    </Stack.Navigator>
  );
}
