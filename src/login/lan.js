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



class Lan extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
          <View style={styles.textContainer}>

        
<Text style={styles.text}>
Choose Your Default Language
</Text>
<TouchableHighlight
              onPress={() => this.props.navigation.navigate('English')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            English
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Spanish')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Spanish
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('French')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            French
                        </Text>
                    </View>
                </TouchableHighlight>
          
          
            </View>



<View style={styles.textContainer}>
            
            </View>

 

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


export default Lan;
