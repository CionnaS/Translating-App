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



class Aboute extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
         

        
<Text style={styles.text}>
About The English Language
</Text>

    <Image source ={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Anglospeak.png/400px-Anglospeak.png'}}
 style={{ height: 160, width: 160, justifyContent: 'center', }}
/>
      <Text style={styles.text}>
English is a West Germanic language that originated from Anglo-Frisian dialects brought to Britain in the mid 5th to 7th centuries AD by Anglo-Saxon settlers. The history of the English language has traditionally been divided into three main periods: Old English (450-1100 AD), Middle English (1100-circa 1500 AD) and Modern English (since 1500).Today, the english language is the most common language used amongst people. 
</Text>
          
            </View>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    
    fontSize: 20,
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
    }
});


export default Aboute ;
