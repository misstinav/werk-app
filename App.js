import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/HomeStack'

// rnfes  --code to start a new component with build (react native functional export stylesheet)

export default function App() {   
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3DFC1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#160F29',
    fontSize: '40px'
  }
});
