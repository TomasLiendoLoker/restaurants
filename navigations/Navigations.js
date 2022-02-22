import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Propios componentes
import RestaurantStack from './RestaurantStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import AccountStack from './AccountStack'
import SearchStack from './SearchStack'


//Creo componente Tab
const Tab = createBottomTabNavigator()

export default function Navigations() {
  return (

    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="restaurants" 
            //pantalla llame a 
            component={RestaurantStack}
            options={{title: "Restaurantes",headerShown: false}}
            />

            <Tab.Screen name="favorites" 
            component={FavoritesStack}
            options={{title: "Favoritos", headerShown: false}}/>
            
            <Tab.Screen name="top-restaurants" 
            component={TopRestaurantsStack}
            options={{title: "Top-5", headerShown: false}}/>

            <Tab.Screen name="search" 
            component={SearchStack}
            options={{title: "Buscar", headerShown: false}}/>
          

            <Tab.Screen name="account" 
            component={AccountStack}
            options={{title: "cuentas", headerShown: false}}/>
          
           
        </Tab.Navigator>
    </NavigationContainer>

  )
}