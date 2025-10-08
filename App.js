/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 07/10/2025 
*
* Apartado 7:
* Siguiendo las instrucciones del ejercicio anterior, implementa ahora con la ayuda 
* de los componentes TextInput y Pressable un validador de DNI. 
* Nota: ten en cuenta que el DNI tendrá que estar formado por 8 números y una letra, 
* cualquier otra combinación, no será válida y se indicará mediante una alerta al usuario.
*/
import { Text, Pressable, Image, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [dni, setDni] = useState();

  function handleOnPress() {
    if (text === '') {
      alert('No has introducido nada.');
      setDni('');
    } else if (text.length !== 9) {
      alert('Introduce un DNI con ocho cifras y una letra.');
      setDni('');
    } else if (!isNaN(parseInt(text[text.length - 1]))) {
      alert('El DNI tiene que acabar en letra.');
      setDni('');
    } else if (isNaN(text.substring(0, 8))) {
      alert('Introduce un DNI con ocho cifras numéricas.');
      setDni('');
    } else {
      if (dni === '') {
        setDni('DNI correcto: ' + text);
      }
    }
    setText('');
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Validador DNI</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta DNI"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{dni}</Text>
      <Pressable onPress={() => handleOnPress()}>
        <Text style={styles.text}>Validar</Text>
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