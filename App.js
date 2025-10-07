/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 07/10/2025 
*
* Apartado 2:
* Sin emplear arrays en los estados y utilizando una única función para manejar 
* los dos eventos, implementa las instrucciones necesarias para que cuando el 
* usuario pulse sobre el componente Image, se cambie la imagen de ese componente y 
* el texto del componente Text ubicado debajo. Si vuelve a pulsar sobre el mismo componente, 
* ambos componentes –Image y Text-, volverán al valor inicial. Si vuelve a pulsar, 
* se volverán a cambiar. Y así sucesivamente. 
* NOTA: implementa a cada componente Image una foto de tu elección.
*/
import { Text, Pressable, Image, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [image, setImage] = useState({image: require('./assets/favicon.png'), text:'Image 1'});
  const [imageTwo, setImageTwo] = useState({image: require('./assets/icon.png'), text:'Image 1'});

  function handleOnPress(number){
    if (number === 0 && image.text === 'Image 1')
      setImage({image: require('./assets/icon.png'), text:'Image 2'});
    else if (number === 0 && image.text === 'Image 2')
      setImage({image: require('./assets/favicon.png'), text:'Image 1'});
    else if (number === 1 && imageTwo.text === 'Image 2')
      setImageTwo({image: require('./assets/favicon.png'), text:'Image 1'});
    else if (number === 1 && imageTwo.text === 'Image 1')
      setImageTwo({image: require('./assets/icon.png'), text:'Image 2'});
  }

  return (
    <View style={styles.containerRow}>
      <Pressable onPress={() => handleOnPress(0)}>
        <Image style={styles.image} source={image.image} />
        <Text>{image.text}</Text>
      </Pressable>
      <Pressable onPress={() => handleOnPress(1)}>
        <Image style={styles.image} source={imageTwo.image} />
        <Text>{imageTwo.text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  containerRow: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100
  },
});
