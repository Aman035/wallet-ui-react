import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import './font';
import { font } from './style';

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Inter Regular',
    fontSize: font.sizeM,
    lineHeight: font.lineHeightM + 3,
    height: font.lineHeightM + 2 * 12,
    flex : 1
  },
  pinInput : {
    fontFamily : 'Inter Bold',
    fontSize : font.sizeL,
    lineHeight : font.lineHeightL,
    height : font.lineHeightL + 20,
    borderWidth : 1,
    paddingHorizontal : 10,
    letterSpacing : 8,
    textAlign : 'center'
  }
});

const Input = ({ style, placeholder, placeholderTextColor }) => {
  const [value, onChangeValue] = React.useState('');
  return (
      <TextInput
        style={[styles.input, style]}
        onChangeText={onChangeValue}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
      />
  );
};

export const PinInput = ({ style,color,onChange,value }) => {
  return (
      <TextInput
        secureTextEntry
        style={[styles.pinInput, style , {borderColor : color.neutral3}]}
        onChangeText={(ev)=>onChange(ev)}
        value={value}
      />
  );
};

export default Input;
