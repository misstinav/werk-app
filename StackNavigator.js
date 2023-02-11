import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import React, { useState } from 'react'
import HomeScreen from './screens/HomeScreen';
import ExerciseGraph from './screens/ExerciseGraph';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

// const Root = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Workout" component={HomeScreen} />
//       <Tab.Screen name="ExerciseGraph" component={ExerciseGraph} />
//     </Tab.Navigator>
//   );
// }
const StackNavigator = () => {
  // https://docs.expo.dev/versions/latest/sdk/auth-session/
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Login" component={LoginScreen}/> */}
      
      <Stack.Screen name="Workout" component={HomeScreen} />
      <Stack.Screen name="ExerciseGraph" component={ExerciseGraph} />
    </Stack.Navigator>
  )
}

export default StackNavigator