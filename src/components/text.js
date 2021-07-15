import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {font} from './style';
import './font';
//
// Base Text
//
const baseStyles = StyleSheet.create({
    text: {
      fontFamily: 'Inter Regular',
      fontSize: font.sizeBase,
      lineHeight: font.lineHeightBase,
      zIndex: 1,
    },
  });
  
  export const Text = ({ children, style, ...props }) => (
    <RNText style={[baseStyles.text, style]} {...props}>
      {children}
    </RNText>
  );
  
  //
  // H1 Text
  //
  
  const h1Styles = StyleSheet.create({
    text: {
      fontFamily: 'Inter Regular',
      fontSize: font.sizeXXL,
      lineHeight: font.lineHeightXXL,
    },
  });
  
  export const H1Text = ({ children = '', style }) => (
    <Text style={[h1Styles.text, style]}>{children}</Text>
  );

    //
  // H2 Text
  //
  
  const h2Styles = StyleSheet.create({
    text: {
      fontFamily: 'Inter Regular',
      fontSize: font.sizeL,
      lineHeight: font.lineHeightL,
    },
  });
  
  export const H2Text = ({ children = '', style }) => (
    <Text style={[h2Styles.text, style]}>{children}</Text>
  );
  
  //
  // H3 Text
  //
  
  const h3Styles = StyleSheet.create({
    text: {
      fontFamily: 'Inter Regular',
      fontSize: font.sizeM,
      lineHeight: font.lineHeightM,
    },
  });
  
  export const H3Text = ({ children = '', style }) => (
    <Text style={[h3Styles.text, style]}>{children}</Text>
  );

  //
  // H4 Text
  //
  
  const h4Styles = StyleSheet.create({
    text: {
      fontFamily: 'Inter Regular',
      fontSize: font.sizeS,
      lineHeight: font.lineHeightS,
    },
  });
  
  export const H4Text = ({ children, style }) => (
    <Text style={[h4Styles.text, style]}>{children}</Text>
  );
  export default Text;
 