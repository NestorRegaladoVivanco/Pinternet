/*Datos de la actividad
Nestor Regalado Vivanco
216145343
INCO

Programacion para Internet - D06
*/
//importacion de los objetos
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, Alert} from 'react-native';
import NativeAccessibilityInfo from 'react-native/Libraries/Components/AccessibilityInfo/NativeAccessibilityInfo';
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //Detclaracion de variables
        codigo:"",
        nip:"",
    };
  }

  render() {
    //Programacion en js de los objetos
    const btnClick = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
                if(xhttp.responseText != "0"){
                    let recibe= xhttp.responseText;
                    let datos=recibe.split(",");
                    console.log(datos[2]);
                    cambiaPantalla("acciones",{"Nombre":datos[2],"Codigo":datos[1]});
                }
                else{
                    alertaSesionInvalida();
                }
            }
        };
        
        xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo="+this.state.codigo+"&nip="+this.state.nip, true);
        xhttp.send(); 

    }
    const cambiaPantalla = (actualizar,datos) => {
        this.props.navigation.navigate(actualizar,datos)
    }

    const alertaSesionInvalida = () =>{
        Alert.alert(
            "Sesion no valida",
            "Usuario no reconocido",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        );
    }

    return (
        <View style={styles.fondoLogin}>
            <Text style ={styles.textoudg}> UdeG </Text>
            <Image style={styles.logoudg} source={require("./Imagenes/Logo-UdeG.png")}/>
            <TextInput style={styles.input}
                placeholder="Codigo"
                keyboardType='numeric'
                onChangeText={codigo => this.setState({codigo})}
            />
            <TextInput style={styles.input}
                placeholder="Nip"
                secureTextEntry={true}
                onChangeText={nip => this.setState({nip})}
            />
            <View style={styles.btnEntrar}>
                <Button title="Entrar" onPress={btnClick}/>
            </View>
        </View>
    );
  } 
}
//La declaracion de estilo
const styles = StyleSheet.create({
        fondoLogin:{
        backgroundColor:"purple",
        },
        textoudg:{
            fontSize:40,
            color:"orange",
            textAlign:"center",
        },
        logoudg:{
            width:200,
            height:300,
            resizeMode:"contain",
            marginLeft:100,
        },
        input:{
            borderWidth:2,
            fontSize:25,
            marginTop:10,
            marginLeft:50,
            marginRight:50,
            backgroundColor:"white"
        },
        btnEntrar:{
            width:100,
            height:80,
            marginLeft:150,
            marginTop:30,
            marginBottom:120, //Llena el espacio blanco del fondo
        },
    }
)