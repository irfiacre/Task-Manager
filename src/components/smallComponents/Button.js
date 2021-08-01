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
      backgroundColor,
      textColor,
  } = props;
  
  const onButtonPress = () => handleOnPress();
  
  const styles = StyleSheet.create({
    text: {
        fontFamily: 'monospace',
        fontSize: 18,
        color: textColor?textColor:"#000",
        textAlign: "center",
    },
    button: {
        backgroundColor: backgroundColor?backgroundColor:"#fff",
        borderRadius: 5,
        padding: 20,
        marginTop: 10,
    },
  });

  return (
        <TouchableOpacity 
         style={styles.button}
         onPress = {onButtonPress}
         
         >
             <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
  );
}

