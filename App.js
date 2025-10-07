/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 07/10/2025 
*
* Apartado 1:
* Sin emplear arrays en los estados y utilizando una única función para 
* manejar los cuatro eventos, implementa las instrucciones necesarias para 
* que cuando el usuario pulse sobre cualquier componente Text, se cambie el texto 
* contenido en ese componente. Si vuelve a pulsar sobre el mismo componente, 
* volverá al valor inicial. Si vuelve a pulsar, se volverá a cambiar. Y así sucesivamente.
*/
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text1, setText1] = useState('Texto');
  const [text2, setText2] = useState('Texto');
  const [text3, setText3] = useState('Texto');
  const [text4, setText4] = useState('Texto');

  function handleOnPress(opcion){
  if (opcion === 1)
    setText1(text1 === 'Texto' ? 'Texto cambiado' : 'Texto');
  
  if (opcion === 2)
    setText2(text2 === 'Texto' ? 'Texto cambiado' : 'Texto');
  
  if (opcion === 3)
    setText3(text3 === 'Texto' ? 'Texto cambiado' : 'Texto');
  
  if (opcion === 4)
    setText4(text4 === 'Texto' ? 'Texto cambiado' : 'Texto');
}

  return (
    <View style={styles.container}>
      <Pressable onPress={() => handleOnPress(1)}>
        <Text style={styles.text}>
          {text1}
        </Text>
      </Pressable>
      <Pressable onPress={() => handleOnPress(2)}>
        <Text style={styles.text}>
          {text2}
        </Text>
      </Pressable>
      <Pressable onPress={() => handleOnPress(3)}>
        <Text style={styles.text}>
          {text3}
        </Text>
      </Pressable>
      <Pressable onPress={() => handleOnPress(4)}>
        <Text style={styles.text}>
          {text4}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    marginBottom: 20,
  },
});
