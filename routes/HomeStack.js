import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PastWorkouts from '../screens/PastWorkouts'
import ExerciseGraph from '../screens/ExerciseGraph';


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
  }
}


const HomeStack = createStackNavigator(screens, {headerMode: 'none'});

export default createAppContainer(HomeStack);