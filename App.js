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
  NativeBaseProvider,
} from 'react-native';
import AdvtScreen from './App/Screens/AdvtScreen';
import LoginScr from './App/Screens/LoginScr';
import SignUp from './App/Screens/SignUp';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Login" component={LoginScr} />
        <Stack.Screen name="Advt" component={AdvtScreen} />
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
