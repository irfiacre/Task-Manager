import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { editTasks } from '../redux/actions/allActions';

export default ({ route,navigation })=> {
  const { text } = route.params;
  
  const tasksStore = useSelector(store => store.allTasks);
  const taskInfo = tasksStore.data.filter(elt => elt.text === text);
  
  const dispatch = useDispatch();
  
  
  const  [ footerState, setFooterSate ]= useState({ text:text });
  
  const onChangeText = (editedText) =>  setFooterSate({
      ...footerState,
      text: editedText,
    });
 
  const onNewChangesSave = () => {
    if (taskInfo[0]) {
      const newTaskDetails = {
          id: taskInfo[0].id,
          text: footerState.text.charAt(0).toUpperCase() + footerState.text.slice(1)
        }
        
      dispatch(editTasks(newTaskDetails));
    }
      
     return navigation.popToTop();
  };  
  
  return (
    <View style={styles.container}>
        <View style={styles.taskWrapper}>
              <Text style={styles.sectionTitle}>
                  This is the edit page
              </Text>
              <TextInput
                 style={ styles.textInput }
                 onChangeText={ text => onChangeText(text) }
                 value={ footerState.text || '' }
              />
        </View>
        <TouchableOpacity 
         style={styles.button}
         onPress = { onNewChangesSave }
         >
         <Text style={styles.text}> Save Changes </Text>
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
  textInput: {
     height: 50,
     borderColor: '#fff',
     backgroundColor:"#fff",
     padding:10,
     fontFamily: 'monospace',
  },
});
