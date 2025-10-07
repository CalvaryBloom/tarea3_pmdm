/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 07/10/2025 
*
* Apartado 5:
* Implementa las instrucciones necesarias para renderizar en la interfaz gráfica 
* un convertidor de kilómetros a millas. Para ello, renderiza un componente TextInput 
* que recoja el contenido que introduzca el usuario, y, debajo, un componente Pressable. 
* Implementa la lógica necesaria para que cuando el usuario pulse el botón de Pressable, 
* se renderice debajo del componente TextInput la cantidad de kilómetros introducida convertida a millas. 
* Si el usuario no introduce ningún dato, saltará una alerta indicándolo y se borrará el contenido 
* introducido en TextInput. Si introduce texto, se le indicará que ha introducido texto 
* y se borrará el contenido introducido en TextInput.
*/
import { Text, Pressable, Image, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [text, setText] = useState('');
  const [km, setKm] = useState();

  function handleOnPress(number) {
    if (isNaN(text)) {
      setKm();
      alert('Has introducido texto');
    } else if (text === '') {
      alert('No has introducido nada');
      setKm();
    } else if (!isNaN(text)) {
      let result = text * 0.621371;
      setKm(result.toFixed(2) + ' millas');
    }
    setText('');
  }

  return (
    <View style={styles.container}>
      <Text style={{ padding: 10, fontSize: 28}}>Convertidor de km a millas</Text>
      <TextInput 
        style={{ height: 40 }}
        placeholder="Inserta kilómetros"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{km}</Text>   
      <Pressable onPress={() => handleOnPress()}>
        <Text style={styles.text}>Convertir</Text>
      </Pressable>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height: 40,
    width: 80,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    padding: 6,
  },
});