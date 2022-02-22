import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements/dist/icons/Icon'


//Propios componentes
import RestaurantStack from './RestaurantStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import AccountStack from './AccountStack'
import SearchStack from './SearchStack'


//Creo componente Tab
const Tab = createBottomTabNavigator()

export default function Navigations() {

  //devuelve el icono
  const screenOptions = (route,color) => {
    let iconName
    switch (route.name) {
      case "restaurants":
        iconName = "compass-outline";
        break;
      case "favorites":
        iconName = "heart-outline";
        break;
      case "top-restaurants":
        iconName = "star-outline";
        break;
      case "search":
        iconName = "magnify";
        break;
      case "account":
        iconName = "home-outline";
        break;
    }
    return(
      //elemento de react native
      <Icon
        //type -> Familia de iconos de donde lo tomamos 
        type="material-community"
        name={iconName}
        size={32}
        color={color}

      />
    )
  }; 
  return (

    <NavigationContainer>
        <Tab.Navigator
          //permite de todos los tabs que vamos a iniciar con cual arrancamos x defecto
          initialRouteName='restaurants'
          //cuando selecionamos y desseleccionamos el tab (color) -> pbjeto
          tabBarOptions={{
            inactiveTintColor:"#a17dc3",
            activeTintColor:"#442484"
          }}
          //screenOpt -> propiedad -> Le vamosa pasar x parametro la funcion que tenemos
          //route -> Nombre del icono
          //DURACELI PARA ENTENDER ! :/
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route,color)
          })}
        >
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