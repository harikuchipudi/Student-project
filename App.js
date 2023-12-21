import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';

import { Component } from 'react';

const Stack = createStackNavigator();


class App extends Component{
  render() {
    return(
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
    );
  }
}

export default App;

