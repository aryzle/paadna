import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
      <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
