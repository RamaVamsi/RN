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

function App() {
  return (
    <View>
      <AdvtScreen />
    </View>
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
