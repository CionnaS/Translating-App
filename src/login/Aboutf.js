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



class Aboutf extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
         

        
<Text style={styles.text}>
About The French Language
</Text>

    <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRpOROzQreT_A5hWgcTnH9rNf5pvsVPNM7K2bAh5o9Y84JuIMM&usqp=CAU'}}
 style={{ height: 160, width: 160, justifyContent: 'center', }}
/>
      <Text style={styles.text}>
The first document apparently written in French probably dates from 842. Known as the Strasbourg Oaths, it is a Romance version of oaths sworn by two of Charlemagne’s grandsons.French phonology is characterized by great changes in the sounds of words as compared with their Latin parent forms as well as cognates in the other Romance languages.
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

export default Aboutf;
