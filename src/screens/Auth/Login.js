import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AuthFormComponent from "../../components/forms/AuthForm"
import ButtonComponent from "../../components/smallComponents/Button"
import * as Google from 'expo-google-app-auth';


export default ({ route,navigation })=> {
  const onUserLoggedIn = (data) => {
    console.log(">>>>>>", data);
  }; 
  
  const signInWithGoogleAsync = async() =>{
      try {
        const result = await Google.logInAsync({
          behavior:'web',
          androidClientId: "618971057985-i03aasm7lcitpkocgjtn9ojhmig0vk2f.apps.googleusercontent.com",
          // iosClientId: YOUR_CLIENT_ID_HERE,
          scopes: ['profile', 'email'],
        });
    
        if (result.type === 'success') {
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        console.log(">>>>", e);
        return { error: true };
      }
    }
  
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
              <ButtonComponent 
                 handleOnPress={signInWithGoogleAsync}
                 value={'Login With Google'}
                 backgroundColor='#55BCF6'
                 textColor='#fff'
              />
         </View>
         
         <View style={styles.wrapper}>
              <Text style={styles.text}>
                  or Login with an Email
              </Text>
         </View>
         
         <View style={styles.wrapper}>
             <AuthFormComponent 
                onSubmit={onUserLoggedIn}
             />
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding: 20,
    justifyContent:"center",
  },
  
  text: {
      fontFamily: 'monospace',
      fontSize: 18,
      color: "#000",
      textAlign:"center",
    },
  wrapper:{
      marginTop:40,
  }
});
