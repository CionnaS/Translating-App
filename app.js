import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Lan from './src/login/lan.js';
import Spanish from './src/login/Spanish.js';
import French from './src/login/French.js';
import English from './src/login/English.js';
import Abouts from './src/login/Abouts.js';
import Aboutf from './src/login/Aboutf.js';
import Aboute from './src/login/Aboute.js';




const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Lan: { screen: Lan },
  French: { screen: French },
  Spanish: { screen: Spanish },
  English: { screen: English },
  Aboute: { screen: Aboute },
  Aboutf: { screen: Aboutf },
  Abouts: { screen: Abouts },
  
  
  
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

