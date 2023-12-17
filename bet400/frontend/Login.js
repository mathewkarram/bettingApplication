import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async () => {
    try {
      const storedCredentials = await AsyncStorage.getItem('userCredentials');
      if (!storedCredentials) {
        setLoginMessage("No stored credentials found.");
        return;
      } 

      const { username: storedUsername, password: storedPassword } = JSON.parse(storedCredentials);

      if (username === storedUsername && password === storedPassword) {
        navigation.navigate('Home');
        setLoginMessage('');
      } else {
        setLoginMessage("Invalid username or password.");
      }
    } catch (e) {
      setLoginMessage("An error occurred while trying to log in.");
    }
  };

  return (
     <View style={styles.container}>
      <Text style={styles.title1}>Bet400</Text>
      <Text style={styles.title2}>Welcome to Login</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Username" 
        placeholderTextColor="black" 
        value={username} 
        onChangeText={setUsername} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        placeholderTextColor="black"
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.buttonText} >Login</Text></TouchableOpacity>
      <Text style={styles.message}>{loginMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
  },
  title1: {
    marginBottom: 20,
    color: '#2E8B57',
    fontSize: 30,
    fontWeight: '700'
    
  },
  title2: {
    marginBottom: 20,
    color: '#2E8B57',
    fontSize: 20,
    fontWeight: '700'
    
  },
  input:{
    color: '#2E8B57',
    fontSize: 18,
    borderColor: '#2E8B57',
    borderWidth: 2,
    margin: 5,
  },
  message: {
    color: 'red',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2E8B57',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});

export default Login;