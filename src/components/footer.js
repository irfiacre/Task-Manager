import React, { useState } from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default (props)=> {
  const {
    onTaskSubmit,
    value,
    isEdit,
  } = props;
  
  const  [ footerState, setFooterSate ]= useState({
    text:'',
  })
  
  const onChangeText = (text) => setFooterSate({ ...footerState, text });
 
  const onSubmit = (data) => onTaskSubmit(data);
    
  return (
      <View style={styles.container}>
          <View style={styles.inputWrapper}>
              <TextInput
                   style={ styles.textInput }
                   onChangeText={ text => onChangeText(text) }
                   value={ footerState.text || '' }
                   placeholder="Write a Task"
                />
          </View>
          <TouchableOpacity 
            style={styles.iconWrapper} 
            onPress={ ()=> onSubmit(footerState) }
          >
             <Ionicons 
               name="add" 
               size={32} 
               color="#E8EAED"
             />
          </TouchableOpacity>
      </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    justifyContent: "space-between",
  },
  
  textInput: {
    height: 50,
    borderColor: '#fff',
    backgroundColor:"#fff",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:100,
    borderRadius:30,
    fontFamily: 'monospace',
    width: 290,
  },
  
  iconWrapper:{
    borderColor: '#fff',
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 20
  }
});