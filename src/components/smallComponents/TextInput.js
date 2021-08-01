import React from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default (props)=> {
  const {
      handleOnChange,
      value,
      height,
      width,
      placeholder
  } = props;
  const onChangeText = (textChange) => handleOnChange(textChange);
  
  return (
    <View>
        <TextInput
           style={ styles.textInput }
           onChangeText={ text => onChangeText(text) }
           placeholder={placeholder||""}
           value={ value || '' }
           height={height ? height : 50}
           width={width ? width : "100%"}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
     borderColor: '#fff',
     backgroundColor:"#fff",
     padding:10,
     fontFamily: 'monospace',
     marginTop:10,
  },
});
