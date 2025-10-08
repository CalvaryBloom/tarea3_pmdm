/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 07/10/2025 
*
* Apartado 6:
* Siguiendo las instrucciones del ejercicio anterior, implementa ahora un convertidor de euros a dólares.
*/
import { Text, Pressable, Image, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [text, setText] = useState('');
  const [dolar, setDolar] = useState();

  function handleOnPress() {
    if (isNaN(text)) {
      setDolar();
      alert('Has introducido texto');
    } else if (text === '') {
      alert('No has introducido nada');
      setDolar();
    } else if (!isNaN(text)) {
      let result = text * 1.16;
      setDolar(result.toFixed(2) + ' $');
    }
    setText('');
  }

  return (
    <View style={styles.container}>
      <Text style={{ padding: 10, fontSize: 28}}>Convertidor de € a $</Text>
      <TextInput 
        style={{ height: 40 }}
        placeholder="Inserta euros"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{dolar}</Text>   
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