//Primer Componente Interno para registrar formulario
import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import { Button, Icon, Input } from "react-native-elements";
import { validateEmail } from "../../utils/helper";
import { size } from "lodash";
import {useNavigation} from '@react-navigation/native'
import {registerUser} from '../../utils/actions'
import Loading from "../Loading";


export default function RegisterForm() {
  //Seteado en false, no lo vamos a mostrar al password por defecto.
  const [showPassword, setShowPassword] = useState(false)

  //Recordar: Las funciones expresadas son aquellas variables que reciben una función y su scope o "alcance" 
  //es todo lo que haya después de hayan sido declaradas. Aquí entran las funciones de tipo flecha.
  //Es por ello que se coloca en primera posicion esta funcion de lo contrario si lo ponemos despues del estado no va a encontrar dicha funcion
  const defaultFormValues = () => {
    return { email : "", password :"", confirm : ""}
  }
  //En un solo estado (objeto) vamos a guardar el valor de todos los formularios y
  //no tener un estado por cada campo => para hacerlo mas generico
  //El estado inicial va a ser una funcion para que lo podamos llamar varias veces
  const [formData, setFormData] = useState(defaultFormValues())
   //un estado para cada campo
   const [errorEmail, setErrorEmail] = useState("")
   const [errorPassword, setErrorPassword] = useState("")
   const [errorConfirm, setErrorConfirm] = useState("")

   //demora al registrar el usuario
   const [loading, setLoading] = useState(false)


  //Para poder implementar la Navegacion
   const navigation = useNavigation()
 
  //event y tipo de campo 
  const onChange = (e, type) => {
    //Se aplica spread operator
    //Llevo lo que tiene el formData (contenido) pero al campo tipo le agrego el valor que nos devuelto el texto
    //type (solo) -> todas las propieades quedan como type, entonces:
    //[type] -> Para que el JSON sea dinámico
    //e.nativeEvent.text -> toma lo que mete el usuario en el input
    setFormData({...formData, [type]: e.nativeEvent.text})
  }

  const doRegisterUser = async() => {
    if (!validateData()){
      return;
    }
    setLoading(true)
    //Todo esta legal
    const result = await registerUser(formData.email,formData.password)
    setLoading(false)

    console.log(result)
    //si hay statusResponse es porque se pudo hacer la cosas (Ok)
    if(! result.statusResponse){
      setErrorEmail(result.error)
      return
    }
    //en caso de que este todo legal, entonces navegamos
    navigation.navigate("account")
  }

  const validateData = () =>{
    setErrorConfirm("")
    setErrorEmail("")
    setErrorPassword("")
    let isValid = true
    if(!validateEmail(formData.email)){
      setErrorEmail("Tenes que ingresar un correo valido")
      isValid=false
    }
    if(size(formData.password) < 6){
      setErrorPassword("Tenes que ingresar una contraseña de al menos 6 caracteres ")
      isValid=false
    }
    if(size(formData.confirm) < 6){
      setErrorConfirm("Tenes que ingresar una confirmacion contraseña de al menos 6 caracteres ")
      isValid=false
    }
    if(formData.password !== formData.confirm){
      setErrorPassword("La contraseña y la confirmacion, no son iguales")
      setErrorConfirm("La contraseña y la confirmacion, no son iguales")
      isValid=false
    }
    return isValid
  }

  return (
    <View style={styles.form}>

      <Input containerStyle={styles.input} 
      placeholder="Ingrese su correo" 
      onChange={(e) => onChange(e, "email")} 
      keyboardType="email-address"
      errorMessage={errorEmail}  
      defaultValue={formData.email}
        />

      <Input
        containerStyle={styles.input}
        placeholder="Ingrese su contraseña"
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "password")}
        errorMessage={errorPassword}  
        defaultValue={formData.password}
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
        onChange={(e) => onChange(e, "confirm")}
        errorMessage={errorConfirm}  
        defaultValue={formData.confirm}
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
        onPress={()=>doRegisterUser()}
      />

     <Loading
      isVisible={loading}
      text="Creando la cuenta"
     
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
