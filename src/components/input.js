import React from 'react';
import { TextInput, StyleSheet,View } from 'react-native';
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

export default Input;
