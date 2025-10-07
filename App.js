/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 07/10/2025 
*
* Apartado 4:
* Implementa las instrucciones necesarias para renderizar en la interfaz gráfica 
* un componente TextInput que recoja el contenido que introduzca el usuario, 
* debajo, un componente Pressable. Implementa la lógica necesaria para que 
* cuando el usuario pulse el botón de Pressable, salte una alerta indicando 
* los siguientes casos: si se ha introducido texto, si se ha introducido un número o si no se ha introducido nada.
*/
import { Text, Pressable, Image, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [text, setText] = useState('');

  function handleOnPress(number) {
    if (isNaN(text)) {
      setText('');
      alert('Has introducido texto');
    } else if (text === '') {
      alert('No has introducido nada');
    } else if (!isNaN(text)) {
      alert('Has introducido un número');
      setText('');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={{ height: 40 }}
        placeholder="Inserta tu texto..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{text}</Text>   
      <Pressable onPress={() => handleOnPress()}>
        <Text style={styles.text}>Pulsame</Text>
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