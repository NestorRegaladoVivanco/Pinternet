/*Datos de la actividad
Nestor Regalado Vivanco
216145343
INCO

Programacion para Internet - D06
*/
import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <View>
          <Text>id: {this.props.route.params.id}</Text>
          <Text>Nombre: {this.props.route.params.Nombre}</Text>
          <Text>Codigo: {this.props.route.params.Codigo}</Text>
          <Text>Tarea: {this.props.route.params.Tarea}</Text>
          <Image 
            style={{widgth:100,height:400}}
            source={{uri:this.props.route.params.Imagen}} 
          />
      </View>
    );
  }
}
