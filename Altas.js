import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default class Altas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //datos del alta
        nombre:"",
        codigo:"",
        tarea:"",
        urli:"",
    };
  }
  render() {
    const btnGuardar = () =>{
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhttp.responseText)
        }
      };
      xhttp.open("GET", "https://demonsweb.000webhostapp.com/Altas.php?nombre="+this.state.nombre+"&codigo="+this.state.codigo+"&tarea="+this.state.tarea+"&imagen="+this.state.urli,true);
      xhttp.send(); 
      
    }

    return (
      <View>
        <Text> Altas </Text>
        <TextInput style={styles.input}
            placeholder="Nombre"
            
            onChangeText={nombre => this.setState({nombre})}
        />
        <TextInput style={styles.input}
            placeholder="Codigo"
            keyboardType='numeric'
            onChangeText={codigo => this.setState({codigo})}
        />
        <TextInput style={styles.input}
            placeholder="Tarea"
            onChangeText={tarea => this.setState({tarea})}
        />
        <TextInput style={styles.input}
            placeholder="Url de la imagen"
            onChangeText={urli => this.setState({urli})}
        />
        <View style={styles.btnAlta}>
            <Button title="Enviar" onPress={btnGuardar} />
        </View>
      </View>
    );
  }
}

//La declaracion de estilo
const styles = StyleSheet.create({
    input:{
        borderWidth:2,
        fontSize:25,
        marginTop:10,
        marginLeft:50,
        marginRight:50,
        backgroundColor:"white"
    },
    btnAlta:{
        width:100,
        height:80,
        marginLeft:150,
        marginTop:30,
        marginBottom:120, //Llena el espacio blanco del fondo
    },
}
)