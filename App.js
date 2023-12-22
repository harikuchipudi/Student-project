import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ProjectScreen from './components/ProjectScreen';
import React, { Component } from 'react';

const Stack = createStackNavigator();


class App extends Component{
  render() {
    return(
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name='ProjectScreen' component={ProjectScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
    );
  }
}

export default App;

