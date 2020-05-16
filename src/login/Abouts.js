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



class Abouts extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
         

        
<Text style={styles.text}>
About The French Language
</Text>

    <Image source ={{uri: 'https://images.slideplayer.com/12/3791972/slides/slide_8.jpg'}}
 style={{ height: 160, width: 160, justifyContent: 'center', }}
/>
      <Text style={styles.text}>
Spanish language, Spanish Español, Romance language spoken as a first language by some 360 million people worldwide. Spanish is the (or an) official language of 18 American countries  as well as of the Commonwealth of Puerto Rico, along with Spain in Europe and Equatorial Guinea in Africa. Outside the Iberian Peninsula, Spanish is spoken in virtually all of Central and South America except Brazil (where Portuguese is spoken), as well as in the Canary Islands, parts of Morocco, and the Philippines. Latin American Spanish has a number of regional dialects; all are derived from Castilian but differ in several points of phonology from European Spanish. 
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

export default Abouts;
