/*Datos de la actividad
Nestor Regalado Vivanco
216145343
INCO

Programacion para Internet - D06
*/
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN  from "./Login";
import PANTALLAB from "./Pantallab";
import ID from "./Id";
import ACCIONES from "./Acciones"
import ALTAS from './Altas';
import BAJAS from './Bajas'
import CAMBIOS from './Cambios'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        
        <Stack.Screen name="Login" component={LOGIN} />
        <Stack.Screen name="pantalla2" component={PANTALLAB} />
        <Stack.Screen name="id" component={ID} />
        <Stack.Screen name="acciones" component={ACCIONES} />
        <Stack.Screen name="altas" component={ALTAS} />
        <Stack.Screen name="bajas" component={BAJAS} />
        <Stack.Screen name="cambios" component={CAMBIOS} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

