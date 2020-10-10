import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>SEE ME NOW?</Text>
      <Image source={require('./assets/logo3.png')}/>
      <Text style={styles.text}>SEE ME?</Text>
      
      <StatusBar style="auto" />
    </View>
    </>
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
    color: 'blue',
  },
});
