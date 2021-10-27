import 'react-native-gesture-handler';
import React from 'react';

import {
  Text,
  TextInput,
  View,
  Platform,
  StyleSheet,
  SafeAreaView,
  useState,
  KeyboardAvoidingView,
} from 'react-native';

import AdvtScreen from './App/Screens/AdvtScreen';
import LoginScr from './App/Screens/LoginScr';
import SignUp from './App/Screens/SignUp';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={LoginScr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  // textinput: {
  //   width: 180,
  //   marginTop: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#fc3866',
  // },
  // headingtext: {
  //   fontSize: 20,
  //   fontFamily: Platform === 'android' ? 'Roboto' : 'Arial',
  //   fontWeight: 'bold',
  // },
  // /*   headercontainer: {
  //   backgroundColor: 'gold',
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // }, */
  // secondimage: {
  //   width: 100,
  //   height: 60,
  // },
});

export default App;
