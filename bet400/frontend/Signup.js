import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Modal, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(true); 

  useEffect(() => {
    let newProgress = 0;
    newProgress += username.length > 0 ? 0.33 : 0;
    newProgress += password.length > 0 ? 0.33 : 0;
    newProgress += age.length > 0 ? 0.34 : 0;
    setProgress(newProgress);
  }, [username, password, age]);

  const handleSignup = async () => {
    const userAge = parseInt(age, 10);
    if (userAge >= 19) {
      try {
        await AsyncStorage.setItem('userCredentials', JSON.stringify({ username, password }));
        setIsModalVisible(false); 
        navigation.navigate('Login'); 
        setMessage('');
      } catch (e) {
        setMessage("Unable to save user data. Please try again later.");
      }
    } else {
       setMessage("You must be at least 19 years old to sign up.");
    }
  }; 

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View style={styles.modalView}>
        <Text style={styles.title1}>Bet400</Text>
        <Text style={styles.title2}>Signup Here</Text>
        <Progress.Bar progress={progress} width={200} color="#5E84E2" style={styles.progressBar} />
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
        <TextInput 
          style={styles.input} 
          placeholder="Age" 
          placeholderTextColor="black" 
          keyboardType="numeric" 
          value={age} 
          onChangeText={setAge} 
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}><Text style={styles.buttonText} >Sign Up</Text></TouchableOpacity>
        <Text style={styles.message}>{message}</Text>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  input: {
    color: '#2E8B57',
    fontSize: 18,
    borderColor: '#2E8B57',
    borderWidth: 2,
    margin: 5,
  },
  progressBar: {
    height: 10,
    alignSelf: 'stretch',
    marginHorizontal: 100,
    marginVertical: 20,
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

export default Signup;