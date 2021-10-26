import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Register from '../Assets/svgs/register.svg';
import AdvtScreen from './AdvtScreen';

export default class LoginScr extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.bigCircle}></View>
          <View style={styles.smallCircle}></View>
          <View style={styles.centerizedView}>
            <View style={styles.authBox}>
              <View style={styles.logoBox}>
                <Register height={60} width={70} />
              </View>
              <Text style={styles.loginTitleText}>SignUp</Text>
              <View style={styles.hr}></View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  textContentType="password"
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  textContentType="password"
                />
              </View>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.9,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ff6b81',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -60,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.5,
    backgroundColor: '#41e9bf',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.8,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '15%',
  },
  authBox: {
    width: '90%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#383575',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#0d7058',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});
