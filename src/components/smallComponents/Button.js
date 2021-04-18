import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

export default (props)=> {
  const {
      handleOnPress,
      value,
  } = props;
  
  const onButtonPress = () => handleOnPress();
  
  return (
        <TouchableOpacity 
         style={styles.button}
         onPress = {onButtonPress}
         >
             <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
      fontFamily: 'monospace',
      fontSize: 18,
      color: "#000",
      textAlign: "center",
  },
  button: {
      backgroundColor: "#fff",
      borderRadius: 5,
      padding: 20,
      marginTop: 10,
  },
});
