/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 07/10/2025 
*
* Apartado 3:
* Sin emplear arrays en los estados y utilizando una única función para manejar 
* los dos eventos, implementa las instrucciones necesarias para que cuando el usuario 
* pulse sobre el cuadrado superior, los dos cuadrados sean de color verde y se aumente su 
* tamaño –de ambos-. Si el usuario pulsa sobre el cuadrado superior, ambos serán de color 
* amarillo y disminuirán su tamaño.
*/
import { Text, Pressable, Image, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [square, setSquare] = useState({
    color: 'green',
    width: 150,
    height: 150,
  });

  function handleOnPress(number) {
    if (number === 0) {
      setSquare({
        color: 'green',
        width: square.width + 10,
        height: square.height + 10
      })
    } else {
      setSquare({
        color: 'yellow',
        width: square.width - 10,
        height: square.height - 10
      })
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => handleOnPress(0)}
        style={[
          styles.square,
          {
            width: square.width,
            height: square.height,
            backgroundColor: square.color
          },
        ]}
      />
      <Pressable
        onPress={() => handleOnPress(1)}
        style={[
          styles.square,
          {
            width: square.width,
            height: square.height,
            backgroundColor: square.color
          }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
  },
  square: {
    marginTop: -6,
    width: 200,
    height: 200, backgroundColor: 'yellow',
  },
});