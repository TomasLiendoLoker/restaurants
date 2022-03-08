import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Loading from '../../components/Loading'
import { Button } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'

export default function UserGuest() {
  const navigation=useNavigation()

  return (
    //cambiar isVisible a true para ver ActivityIndicator 
    /* <View>
      <Text>UserGuest...</Text>
      <Loading isVisible={false} text="Cargando"/>
    </View>*/
    <ScrollView
      centerContent
      style={styles.viewBody}
      >
        <Image
          source={require("../../assets/restaurant-logo.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>Consulta tu perfil en Restaurants </Text>
        <Text style={styles.description}>
          Restaurants es una aplicacion que permite buscar, visualizar y recomendar restaurantes al alcance de unos clicks. 
        </Text>
        <Button
            buttonStyle={styles.button}
            title={"Ver tu perfil"}
            onPress={()=>navigation.navigate("login")}
          >
        </Button>

    </ScrollView>
    

  )
}

const styles = StyleSheet.create({
  viewBody:{
    marginHorizontal:30
  },
  image:{
    height:300,
    width:"100%",
    marginBottom:10,
    textAlign:"center"
  },
  title:{
    fontWeight: "bold",
    fontSize:19,
    marginVertical:10,
    textAlign:"center"
  },
  description:{
    textAlign:"justify",
    marginBottom:2,
    color:"#a65273"
  },
  button:{
    backgroundColor:"#442484",
    marginTop:11
  }
})