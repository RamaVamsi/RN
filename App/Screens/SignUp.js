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

export default class SignUp extends React.Component {
  /* const [email, setEmail] = useState(email);
  const [password, setPassword] = useState(password);
  const [confirmPassword, setConfirmPassword] = useState(confirmPassword); */

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

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
              <Text style={styles.registerTitleText}>SignUp</Text>
              <View style={styles.hr}></View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  mode="outlined"
                  keyboardType="email-address"
                  textType="emailAddress"
                  value={this.state.email}
                  onChangeText={text => this.setState({email: text})}
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  textType="password"
                  value={this.state.password}
                  onChangeText={text => this.setState({password: text})}
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  textType="confirmpassword"
                  value={this.state.confirmPassword}
                  onChangeText={text => this.setState({confirmPassword: text})}
                />
              </View>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                  if (
                    this.state.email != '' &&
                    this.state.password != '' &&
                    this.state.confirmPassword != '' &&
                    this.state.password == this.state.confirmPassword
                  ) {
                    firebaseApp
                      .auth()
                      .createUserWithEmailAndPassword(
                        this.state.email,
                        this.state.password,
                      )
                      .then(result => {
                        console.log(result);
                      })
                      .catch(error => {
                        alert(error);
                      });
                  } else {
                    alert('Please Enter Login Details');
                  }
                }}>
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}>
                <Text style={styles.registerText}>
                  Exisitng User ? Login Now
                </Text>
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
  registerTitleText: {
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
  registerButton: {
    backgroundColor: '#0d7058',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  registerButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});
