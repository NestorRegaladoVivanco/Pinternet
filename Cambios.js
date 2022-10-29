import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput,  } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
//npm install react-native-select-dropdown

export default class Cambios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer:"",
      //Dato para cambio
      codigo:"",
      tarea:"",
      imagen:"",
    };
  }

  componentDidMount(){
    let _this = this;
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
                var datos=JSON.parse(xhttp.responseText);
                _this.setState({datosServer:datos});
            }
        };
        
        xhttp.open("GET", "https://demonsweb.000webhostapp.com/codigos.php", true);
        xhttp.send(); 
  }
  render() {
    const codigos = this.state.datosServer

    const btnCambiarImagen = () =>{
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhttp.responseText)
        }
      };
      xhttp.open("GET", "https://demonsweb.000webhostapp.com/actualizarImagen.php?codigo="+this.state.codigo+"&imagen="+this.state.imagen,true);
      xhttp.send(); 
    }

    const btnCambiarTarea = () =>{
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhttp.responseText)
        }
      };
      xhttp.open("GET", "https://demonsweb.000webhostapp.com/actualizarImagen.php?codigo="+this.state.codigo+"&tarea="+this.state.tarea,true);
      xhttp.send(); 
    }

    return (
      <View>
        <Text> Cambios </Text>
        <Text> Ingrese el codigo a cambiar: </Text>
        <View  style={{paddingHorizontal:20, paddingVertical:50, flex:1}}>
          <SelectDropdown
            data={codigos}
            onSelect={(selectedItem, index)=>{
              console.log(selectedItem, index)
              this.state.codigo = selectedItem; 
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            defaultButtonText={'Seleccione un codigo'}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />         
        </View>
          <TextInput style={styles.input}
            placeholder="Imagen"
            onChangeText={imagen => this.setState({imagen})}
          />
          <View style={styles.btnCambiar}>
            <Button title="Actualizar imagen" onPress={btnCambiarImagen} />
          </View>
          <TextInput style={styles.input}
            placeholder="Tarea"
            onChangeText={tarea => this.setState({tarea})}
          />
          <View style={styles.btnCambiar}>
            <Button title="Actualizar tarea" onPress={btnCambiarTarea} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
      borderWidth:2,
      fontSize:25,
      marginTop:10,
      marginLeft:50,
      marginRight:50,
      backgroundColor:"white"
  },
  btnCambiar:{
      width:100,
      height:80,
      marginLeft:150,
      marginTop:30,
  },
  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
}
)