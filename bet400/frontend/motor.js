import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import BetPage from './betpage';
import Login from './Login';

const Stack = createStackNavigator();
const API = 'https://www.thesportsdb.com/api/v1/json/3/eventresults.php?id=652890';

const renderItem = ({ item }) => <Item name={item.strPlayer} />;

function Item(props) {
  const navigation = useNavigation();
  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.2,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scale }],
  };

  const handlePress = () => {
    navigation.navigate('Bet', { teamName: props.name });
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handlePress}
          activeOpacity={0.8}
        >
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text style={styles.buttonText}>{props.name}</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Display({ navigation }) {
 
const [apiData, setApiData] = useState([]);
  
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setApiData(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (
    <View style={styles.page}>
      <View style={styles.container2}>
      <Text style={styles.text}>Place your bet on the following Drivers!</Text>  
      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Login')}><Text style={styles.buttonText}> Logout</Text></TouchableOpacity>  
      </View>
      <FlatList
        data={apiData}
        keyExtractor={(item) => item.idResult} 
        renderItem={renderItem}
      />
    </View>
  );
}

export default function Motor({ navigation }) {
 
  return (
    <Stack.Navigator>
      <Stack.Screen name="Racing" component={Display} />
      <Stack.Screen name="Bet" component={BetPage} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#DCDCDC',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    margin: 10, 
    alignItems: 'center', 
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    margin: 10, 
    alignItems: 'center', 
  },
  button2: {
    backgroundColor: '#2E8B57',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 50, 
    margin: 20
  },
  button: {
    backgroundColor: '#2E8B57',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 60, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  text: {
    color: '#2E8B57',
    fontSize: 18,
    alignSelf: 'center',
    margin: 30
  },
});