import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Acciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Nombre: {this.props.route.params.Nombre} </Text>
        <Text> Codigo: {this.props.route.params.Codigo} </Text>
        <Button title='Altas' onPress={()=>this.props.navigation.navigate("altas",)}  />
        <Button title='Bajas' onPress={()=>this.props.navigation.navigate("bajas",)}/>
        <Button title='Cambios' onPress={()=>this.props.navigation.navigate("cambios",)}/>
        <Button title='Lista' onPress={()=>this.props.navigation.navigate("pantalla2",{"Nombre":this.props.route.params.Nombre,"Codigo":this.props.route.params.Codigo})} />
      </View>
    );
  }
}
