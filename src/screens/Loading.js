import firebase from 'firebase';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default ({ route,navigation })=> {
  const checkLoggedIn = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if (user) {
          navigation.navigate("Home");
        } else {
          navigation.navigate("Login");
        }
    })
  }
  useEffect(()=>{
      checkLoggedIn();
  }, []);
  
  return (
    <View style={styles.container}>
        <View style={styles.taskWrapper}>
              <ActivityIndicator size="large" color="#55BCF6" />
              <Text style={styles.text}>
                Please Wait a moment
              </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    backgroundColor: '#E8EAED',
    flex: 1,
    justifyContent:"center",
    padding: 20,
  },
  
  text: {
      color: "#55BCF6",
      fontFamily: 'monospace',
      fontSize: 18,
      textAlign:"center",
    },
    
});
