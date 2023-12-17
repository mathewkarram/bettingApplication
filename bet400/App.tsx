import { Text, SafeAreaView, StyleSheet, View, Button  } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Soccer from './frontend/soccer';
import Basketball from './frontend/basketball';
import Motor from './frontend/motor';
import Home from './frontend/home';
import { useSelector, useDispatch, Provider } from 'react-redux';
import store from './frontend/store';
import Signup from './frontend/Signup';
import Login from './frontend/Login';




const Tab = createMaterialTopTabNavigator();

export default function App() {
  
  return (
     <Provider  store={store}>
     
    <NavigationContainer >
        <Tab.Navigator
        
       
      >
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Football" component={Soccer} />
        <Tab.Screen name="BBall" component={Basketball} />
        <Tab.Screen name="Motor" component={Motor} />
      </Tab.Navigator>
    </NavigationContainer>
    
    </Provider>
  );
}


