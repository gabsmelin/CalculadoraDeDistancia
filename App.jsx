import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [velocidade, setVelocidade] = useState('');
  const [horas, setHoras] = useState('');

  function calcularDistancia(velocidade, horas) {
    const distancia = parseFloat(velocidade) * parseFloat(horas);
    Alert.alert('Distância percorrida:', `${distancia} KM`);
  }

  return (
    <View style={styles.container}>
      <Text>Velocidade (KM/H)</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe a velocidade."
        value={velocidade}
        placeholderTextColor="#999"
        onChangeText={(text) => setVelocidade(text)}
        keyboardType="numeric"
      />
      <Text>Tempo (Horas)</Text>
      <TextInput
        placeholder="Informe o tempo em horas."
        style={styles.input}
        value={horas}
        placeholderTextColor="#999"
        onChangeText={(text) => setHoras(text)}
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={() => calcularDistancia(velocidade, horas)} />
      <StatusBar style="auto" />
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
  input: {
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    padding: 10,
  },
});
