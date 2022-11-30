import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen  from './pages/HomeScreen';

const Stack = createStackNavigator();
export default Router = () => {
    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    );
  };