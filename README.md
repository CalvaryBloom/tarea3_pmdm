# Eventos onPress y onChangeText en React Native

## 📋 Descripción

Actividades prácticas para aprender a implementar eventos `onPress` y `onChangeText` en React Native, trabajando con componentes core y manejo de estados mediante `useState`.

## 🎯 Objetivos

- Aprender a implementar eventos onPress y onChangeText en React Native
- Manejar estados con useState
- Trabajar con componentes core (Text, Pressable, Image, TextInput)

## ⏱️ Temporalización

**Dedicación estimada:** 2 horas

---

## 📝 Ejercicios

### Ejercicio 1: Toggle de Texto

**Descripción:** Implementar un sistema de alternancia de texto al pulsar sobre componentes Text.

**Requisitos:**
- Sin emplear arrays en los estados
- Utilizar una única función para manejar los cuatro eventos
- Al pulsar sobre un Text, cambiar su contenido
- Volver al valor inicial al pulsar de nuevo
- Alternar indefinidamente

**Código inicial:**
```javascript
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Texto</Text>
      <Text style={styles.text}>Texto</Text>
      <Text style={styles.text}>Texto</Text>
      <Text style={styles.text}>Texto</Text>
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
```

---

### Ejercicio 2: Toggle de Imágenes y Texto

**Descripción:** Implementar alternancia de imágenes y texto simultáneamente.

**Requisitos:**
- Sin emplear arrays en los estados
- Utilizar una única función para manejar los dos eventos
- Al pulsar sobre una Image, cambiar la imagen y el texto debajo
- Volver a los valores iniciales al pulsar de nuevo
- Implementar imágenes de tu elección

**Código inicial:**
```javascript
import { Text, Pressable, Image, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerRow}>
      <Pressable>
        <Image style={styles.image} source={} />
        <Text>Texto 1</Text>
      </Pressable>
      <Pressable>
        <Image style={styles.image} source={} />
        <Text>Texto 2</Text>
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
    height: 100,
  },
});
```

---

### Ejercicio 3: Control Sincronizado de Cuadrados

**Descripción:** Controlar color y tamaño de dos cuadrados simultáneamente.

**Requisitos:**
- Sin emplear arrays en los estados
- Utilizar una única función para manejar los dos eventos
- Al pulsar el cuadrado superior: ambos cuadrados se vuelven verdes y aumentan de tamaño
- Al pulsar el cuadrado inferior: ambos cuadrados se vuelven amarillos y disminuyen de tamaño

**Código inicial:**
```javascript
import { Pressable, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.square}/>
      <Pressable style={styles.square}/>
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
  square: {
    marginTop: -6,
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
  },
});
```

---

### Ejercicio 4: Validador de Entrada

**Descripción:** Crear un sistema que valide el tipo de entrada del usuario.

**Requisitos:**
- Renderizar un TextInput y un Pressable
- Al pulsar el botón, mostrar una alerta indicando:
  - Si se ha introducido texto
  - Si se ha introducido un número
  - Si no se ha introducido nada

---

### Ejercicio 5: Convertidor de Kilómetros a Millas

**Descripción:** Crear un convertidor de unidades de distancia.

**Requisitos:**
- Renderizar un TextInput y un Pressable
- Al pulsar el botón, convertir kilómetros a millas (1 km = 0.62 millas)
- Mostrar el resultado debajo del TextInput
- Si no se introduce nada: mostrar alerta y borrar contenido
- Si se introduce texto: mostrar alerta y borrar contenido

**Fórmula:** `millas = kilómetros × 0.62`

---

### Ejercicio 6: Convertidor de Euros a Dólares

**Descripción:** Crear un convertidor de divisas.

**Requisitos:**
- Similar al ejercicio anterior
- Convertir euros a dólares
- Implementar las mismas validaciones

---

### Ejercicio 7: Validador de DNI

**Descripción:** Crear un validador de DNI español.

**Requisitos:**
- Utilizar TextInput y Pressable
- DNI válido: 8 números + 1 letra
- Cualquier otra combinación es inválida
- Mostrar alerta indicando si el DNI es válido o no

**Formato válido:** `12345678A`

---

## 🛠️ Tecnologías

- React Native
- JavaScript/JSX
- Hooks (useState)

## 📚 Componentes Core Utilizados

- `View`
- `Text`
- `Pressable`
- `Image`
- `TextInput`
- `StyleSheet`

## 💡 Conceptos Clave

- Manejo de estados con `useState`
- Eventos `onPress`
- Eventos `onChangeText`
- Validación de datos
- Conversión de unidades
- Renderizado condicional

---

## 📖 Recursos Adicionales

- [Documentación oficial de React Native](https://reactnative.dev/)
- [useState Hook](https://react.dev/reference/react/useState)
- [Handling Text Input](https://reactnative.dev/docs/handling-text-input)

---

**Asignatura:** Programación Multimedia y de Dispositivos Móviles - BLOQUE 1