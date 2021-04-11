import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default ({ route,navigation })=> {
  const { text } = route.params;
  
  return (
    <View style={styles.container}>
        <View style={styles.taskWrapper}>
              <Text style={styles.sectionTitle}>
                  Title: { text }
              </Text>
              <Text style={styles.text}>
                  Description: 
                  I will add this section on after adding firebase and here the user must be able to 
                  connect event(task) to an alarm & calendar of his/her phone, plus on editing the task that's when we can 
                  add new fields ..... 
              </Text>
        </View>
        <TouchableOpacity 
           style={styles.button}
           onPress={ ()=> navigation.push('EditTask',{ text })} 
         >
         <Text style={styles.text}> Edit Task </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding: 20,
    justifyContent:"space-between",
  },
  
  sectionTitle: {
    fontFamily: 'monospace',
    fontSize:24,
    fontWeight:'bold',
  },
  
  text: {
      fontFamily: 'monospace',
      fontSize: 18,
      color: "#000",
      textAlign:"center",
    },
    
  button: {
      backgroundColor:"#fff",
      borderRadius:5,
      padding: 20,
      marginTop: 10,
      
    },
});
