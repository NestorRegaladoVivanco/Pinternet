import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
//npm install react-native-select-dropdown

export default class Bajas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //Dato para baja
        datosServer:"",
        codigo:"",
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
    
    const btnEliminar = () =>{
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText)
          }
        };
        xhttp.open("GET", "https://demonsweb.000webhostapp.com/bajas.php?codigo="+this.state.codigo,true);
        xhttp.send(); 
        
    }

    return (
        
        <View>
            <Text> Bajas </Text>
            <Text> Ingrese el codigo a dar de baja: </Text>
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
            <View style={styles.btnDestruir}>
                <Button title="Eliminar" onPress={btnEliminar} />
            </View>
        </View>
    );
    }
}

//La declaracion de estilo
const styles = StyleSheet.create({

    btnDestruir:{
        width:100,
        height:80,
        marginLeft:150,
        marginTop:30,
        marginBottom:120, //Llena el espacio blanco del fondo
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