import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PastWorkouts from '../screens/PastWorkouts'
import ExerciseGraph from '../screens/ExerciseGraph';
import ExerciseModal from '../screens/ExerciseModal';


const screens = {
  Login: {
    screen: LoginScreen 
  },
  Home: {
    screen: HomeScreen
  },
  Workouts: {
    screen: PastWorkouts
  },
  Progress: {
    screen: ExerciseGraph
  },
  Modal: {
    screen: ExerciseModal
  }
}


const HomeStack = createStackNavigator(screens, {headerMode: 'none'});

// return (
//   <HomeStack.Navigator>
//     <HomeStack.Group screenOptions={{headerShown: false}}>
//       <HomeStack.Screen name='Login' component={LoginScreen}/>
//       <HomeStack.Screen name='Home' component={HomeScreen}/>
//       <HomeStack.Screen name='Progress' component={ExerciseGraph}/>
//       <HomeStack.Screen name='Workouts' component={PastWorkouts}/>
//     </HomeStack.Group>
//     <HomeStack.Group screenOptions={{presentation: 'modal'}}>
//       <HomeStack.Screen name='Home' component={ExerciseModal}/>

//     </HomeStack.Group>
//   </HomeStack.Navigator>
// )

export default createAppContainer(HomeStack);