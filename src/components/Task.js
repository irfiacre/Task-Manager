import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Roboto_400Regular
} from '@expo-google-fonts/roboto'
import { MaterialIcons  } from '@expo/vector-icons';

export default  (props) => {
    const {
      text,
      onDeleteTask,
      navigation
    } = props;
    
    let [fontsLoaded] = useFonts({
      Roboto_400Regular,
    });
  
    if (!fontsLoaded) {
      return <Text style={styles.noContentTitle}> Loading...</Text>;
    }
    
    const deleteTask = () => onDeleteTask();
    
  return (
    <View style={styles.container}>
         <View style={styles.taskInfo}>
           <View style={styles.rectangular}></View>
           <Text 
             style={styles.sectionTitle} 
             onPress={ ()=> navigation.navigate('Task',{ text })}
           > { text } </Text>
         </View>
           <TouchableOpacity 
             style={styles.circular}
             onPress={deleteTask} 
           >
             <MaterialIcons  
               name="delete" 
               size={30} 
               color="#55BCF6"
             />
           </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    backgroundColor:"#FFF",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:20,
    borderRadius:5
  },
  taskInfo:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  rectangular:{
    width: 24,
    height:24,
    backgroundColor: "#55BCF6",
    opacity:0.4,
    borderRadius:5,
  },
  
  sectionTitle:{
    fontFamily: 'Roboto_400Regular',
    width:"80%",
    fontSize:18,
  },
});
