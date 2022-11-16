import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './scr/screens/HomeScreen';
import GameScreen from './scr/screens/GameScreen';
import ScoreScreen from './scr/screens/ScoreScreen';

import { Provider } from 'react-redux';
import { gameStore } from './scr/redux/Store';

//Project Navigator Stack
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={gameStore}>
      <NavigationContainer>
        <Stack.Navigator >
          
          <Stack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign:'center', title:'WELCOME'}} />
          <Stack.Screen name="Game" component={GameScreen} options={{headerTitleAlign:'center', title:'GAME'}}/>
          <Stack.Screen name="Score" component={ScoreScreen} options={{headerTitleAlign:'center', title:'SCORE BOARD'}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


export default App;
