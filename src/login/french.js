import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';
import Constants from 'expo-constants';

import * as Speech from 'expo-speech';


class French extends React.Component {
speak() {
var thingToSay = 'bonheur';
Speech.speak(thingToSay);
}
 speak1() {
var thingToSay = 'chat';
Speech.speak(thingToSay);
}
speak2() {
var thingToSay = 'chien';
Speech.speak(thingToSay);
}

  render() {
    return (


      <View style={styles.container}>
       
         <Text style={styles.logoText1}>French</Text>

         <Text style={styles.logoText}>bonheur</Text>
<TouchableHighlight

onPress={this.speak} >



<View style={styles.touchableButton1}>

<Text style={styles.buttonText}>

Translate

</Text>

</View>

</TouchableHighlight>
         <Text style={styles.logoText}>chat</Text>
<TouchableHighlight

onPress={this.speak1} >



<View style={styles.touchableButton1}>

<Text style={styles.buttonText}>

Translate

</Text>

</View>

</TouchableHighlight>
         <Text style={styles.logoText}>chien</Text>
<TouchableHighlight

onPress={this.speak2} >



<View style={styles.touchableButton1}>

<Text style={styles.buttonText}>

Translate

</Text>

</View>

</TouchableHighlight>

          
            </View>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },



  logoText: {
    color:'blue',
    fontSize: 20,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText1: {
    color:'blue',
    fontSize: 40,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

   touchableButton1: {
        backgroundColor: 'red',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 50,
         borderRadius: 10,
   
   
    },
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    },

loginFormTextInput: {
height: 200,
fontSize: 14,
borderRadius: 5,
borderWidth: 1,
borderColor: '#eaeaea',
backgroundColor: '#fafafa',
paddingLeft: 10,
marginLeft: 15,
marginRight: 15,
marginTop: 5,
marginBottom: 5,
},
});


export default French;
