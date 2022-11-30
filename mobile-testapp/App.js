import React from 'react';
import Router from './App/Routes';
import {NavigationContainer} from '@react-navigation/native';
import store from './App/store'
import { Provider } from 'react-redux'

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};
