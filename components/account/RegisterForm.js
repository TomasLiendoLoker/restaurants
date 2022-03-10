//Primer Componente Interno para registrar formulario
import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import { Button, Icon, Input } from "react-native-elements";

export default function RegisterForm() {
  //Seteado en false, no lo vamos a mostrar al password por defecto.
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View style={styles.form}>

      <Input containerStyle={styles.input} placeholder="Ingrese su correo" />

      <Input
        containerStyle={styles.input}
        placeholder="Ingrese su contraseña"
        password={true}
        secureTextEntry={!showPassword}
        rightIcon={
          <Icon 
              type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icono}
              onPress={()=> setShowPassword(!showPassword)}

          />}
      />

      <Input
        containerStyle={styles.input}
        placeholder="Confirme su contraseña"
        password={true}
        secureTextEntry={!showPassword}
        rightIcon={
          <Icon 
              type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icono}
              onPress={()=> setShowPassword(!showPassword)}

          />}
      />

      <Button
        title="Registar Nuevo Usuario"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  input: {
    width: "100%",
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#442484",
  },
  icono:{
    color: "#c1c1c1"
  }
});
