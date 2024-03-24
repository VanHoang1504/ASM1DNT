import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Login Error', 'Please enter email and password');
      return;
    }
    // Code for login process goes here
    // For now, just navigate to Tabnavigation
    navigation.navigate('Tabnavigation');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../img/food_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Food Delivery</Text>
        <Text style={styles.subtitle}>Login to Continue</Text>

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'stretch',
    marginBottom: 5,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  textInput: {
    height: 48,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonLogin: {
    height: 48,
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textLogin: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
  },
  forgotPasswordButton: {
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: 'blue',
  },
  registerButton: {
    marginBottom: 20,
  },
  registerText: {
    color: 'green',
  },
});
