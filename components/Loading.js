import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Overlay } from "react-native-elements";

export default function Loading({ isVisible, text }) {
  return (
    <Overlay
    isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColor="transparent" overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#442484" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#ffffff",
    borderColor: "#442484",
    //ancho
    borderWidth: 2,
    //redondear los bordes
    borderRadius: 10,
  },
  view:{
      //todo el ancho que se pueda
      flex:1,
      //horizontal
      alignItems:"center",
      //vertical
      justifyContent:"center"
  },
  text:{
      color: "#442484",
      marginTop: 10
      
  }
});


