import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TextInputComponent from "../smallComponents/TextInput"
import ButtonComponent from "../smallComponents/Button"

export default (props)=> {
  const {
      isSignup,
      onSubmit,
  } = props;

  
  const  [ formState, setFormState ]= useState({
      email: '',
      password: '',
      confirmPassword: '',
  });
  
  const onChangeText = (stateName,textChanged) => { 
      console.log(">>>>>", {[stateName]: textChanged});
      
      return setFormState({ ...formState,[stateName]:textChanged })
    };
 
  const onFormSubmit = () => onSubmit(formState);
  
  return (
    <View>
        <View style={styles.taskWrapper}>
              <TextInputComponent
                 handleOnChange={onChangeText}
                 value={ formState.text || '' }
                 placeholder = "Enter your email"
              />
              <TextInputComponent
                 handleOnChange={onChangeText}
                 value={ formState.text || '' }
                 placeholder = "Enter your password"
              />
             {
                 isSignup ? <TextInputComponent
                     handleOnChange={onChangeText}
                     value={ formState.text || '' }
                     placeholder = "Enter your password"
                  />:null
             }
        </View>
        
        <View>
            <ButtonComponent 
               handleOnPress={onFormSubmit}
               value={isSignup ?'Create Account':'Login'}
            />
        </View>
            <Text style={styles.coloredText}>
              { isSignup ?'Login':'Or create an Account' }
            </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  coloredText: {
      fontFamily: 'monospace',
      fontSize: 18,
      color: "#8E9492",
      textAlign:"center",
      marginTop: 10,
    },
    
});
