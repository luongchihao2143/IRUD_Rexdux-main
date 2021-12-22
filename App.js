import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/stores';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeDetails from './src/screens/HomeDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
          <Home />
    </Provider>
  )
}

export default App
