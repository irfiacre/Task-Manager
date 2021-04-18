import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AuthFormComponent from "../../components/forms/AuthForm"
import ButtonComponent from "../../components/smallComponents/Button"

export default ({ route,navigation })=> {
  const onUserLoggedIn = (data) => {
    console.log(">>>>>>", data);
  }; 
  
  const onUserLoggedInWithGoogle = (data) => {
    console.log(">>>>>>", data);
  };  
  return (
    <View style={styles.container}>
        <View style={styles.taskWrapper}>
              <ButtonComponent 
                 handleOnPress={onUserLoggedInWithGoogle}
                 value={'Login With Google'}
              />
              <Text style={styles.sectionTitle}>
                  or Login with an Email
              </Text>
         </View>
         
         <View>
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
    alignItems:"center",
  },
  
  sectionTitle: {
    fontFamily: 'monospace',
    fontSize:24,
    fontWeight:'bold',
    textAlign:"center",
  },
  
  // text: {
  //     fontFamily: 'monospace',
  //     fontSize: 18,
  //     color: "#000",
  //     textAlign:"center",
  //   },
});
