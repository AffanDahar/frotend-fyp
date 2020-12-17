import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export default function FormInput({ labelName, placeholder , icon}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      left={<TextInput.Icon style={{ borderRightWidth: 1, borderRadius : 0, marginRight : 15, width: 40 , height : "160%" }} name={icon} />}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    marginRight : 10, 
    width: width / 1.4,
    height: height / 14,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius : 20 ,
    borderTopRightRadius : 20 ,
    borderBottomLeftRadius : 20 ,
    borderBottomRightRadius : 20 ,
  }
});