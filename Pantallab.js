/*Datos de la actividad
Nestor Regalado Vivanco
216145343
INCO

Programacion para Internet - D06
*/
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer:"",
    };
  }
  componentDidMount(){
    let _this = this;
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                //console.log(xhttp.responseText);
                var datos=JSON.parse(xhttp.responseText);
                _this.setState({datosServer:datos});
            }
        };
        
        xhttp.open("GET", "https://demonsweb.000webhostapp.com/mostrarDatos.php", true);
        xhttp.send(); 
  }
  render() {
    const getIteam=(numeroCelda,nombreDelMono,codigoDelMono,tareaDelMono,imagenDelMono)=>{
      console.log(numeroCelda);
      //Ir a la siguiente ventana con variables
      this.props.navigation.navigate("id",{"id":numeroCelda,"Nombre":nombreDelMono,"Codigo":codigoDelMono,"Tarea":tareaDelMono,"Imagen":imagenDelMono})
    }
    //creacion de la celda
    const celda=({item})=>{
      return(
      <View style = {{margin:10,borderWidth:1,borderColor:"purple",backgroundColor:"pink"}}>
        <TouchableOpacity onPress={()=>getIteam(item.id,item.Nombre,item.Codigo,item.Tarea,item.Imagen)}>
          <Text>id: {item.id}</Text>
          <Text>Nombre: {item.Nombre}</Text>
          <Text>Codigo: {item.Codigo}</Text>
          <Text>Tarea: {item.Tarea}</Text>
        </TouchableOpacity>
      </View>
      )
    }
    return (
      
      <View>
        <Text> Bienvenido: {this.props.route.params.Nombre} </Text>
        <Text> Codigo: {this.props.route.params.Codigo} </Text>
        <FlatList
          data={this.state.datosServer}
          renderItem={celda}
          keyExtractor={(item,index)=>index.toString()}
        />
      </View>
    );
  }
}
