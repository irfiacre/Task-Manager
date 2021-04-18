import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default (props)=> {
  const {
    text,
    previous, 
    navigation,
  } = props;
  console.log(">>>>>", previous);
  return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
              {
                previous ? <TouchableOpacity 
                  style={styles.iconWrapper} 
                  onPress={ ()=> navigation.goBack() }
                >
                   <Ionicons 
                     name="chevron-back-sharp" 
                     size={30} 
                     color="#FFF"
                   />
                </TouchableOpacity>:null
              }
              
              <Text style={styles.text}> {text? text : "Task Manager"}</Text>
              
              </View>
        
            <Image
                 style={styles.image}
                 source={{ uri:"https://randomuser.me/api/portraits/men/24.jpg" }}
            />
            
      </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#55BCF6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 90,
    padding: 20
  },
  
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  
  image:{
    width: 40, 
    height: 40, 
    borderRadius: 50,
  },
  text:{
    marginTop:3,
    color: "#fff",
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 22,
  }
  
});