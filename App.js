import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

import Icon from '@expo/vector-icons/MaterialIcons'

export default function App() {
  const [txt, setTxt] = useState('')

  function speak() {
    Speech.speak(txt, {
      language: 'pt-BR'
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite algo</Text>
      <TextInput onChangeText={(txt) => setTxt(txt)} style={styles.input} placeholder="Ex: CEO of Casas Bahia" />
      <TouchableOpacity onPress={speak}>
        <Icon name="record-voice-over" size={50} />
      </TouchableOpacity>
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
  label: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#999',
    borderStyle: 'solid',
    borderRadius: 12,
    padding: 7
  },
});
