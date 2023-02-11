import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/HomeStack'
import StackNavigator from './StackNavigator';

// rnfes  --code to start a new component with build (react native functional export stylesheet)

// possible navigation solution
// https://www.youtube.com/watch?v=cS4PgI3zBzY&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=20
// https://www.youtube.com/watch?v=llPRMRl_ZTM

export default function App() {   
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
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
