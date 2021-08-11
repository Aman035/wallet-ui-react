import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import {font} from './style';
import {light , dark} from './themeColor';
import './font';

// Base Text
const baseStyles = StyleSheet.create({
    text: {
      fontFamily: 'Inter Regular',
      fontSize: font.sizeBase,
      lineHeight: font.lineHeightBase,
      zIndex: 1,
    },
    light : {
      color : light.black
    },
    dark : {
      color : dark.white
    }
  });
  
  export const Text = ({ children, style, theme, ...props }) => (
    <RNText 
      style={[baseStyles.text, style , theme === 'dark' ? baseStyles.dark : baseStyles.light]}
      {...props}>
      {children}
    </RNText>
  );

  // H1 Text
  const h1Styles = StyleSheet.create({
    text: {
      fontFamily: 'Inter Regular',
      fontSize: font.sizeXXL,
      lineHeight: font.lineHeightXXL,
    },
  });
  
  export const H1Text = ({ children = '', style ,theme='light'}) => (
    <Text style={[h1Styles.text, style]} theme={theme}>{children}</Text>
  );

  // H2 Text
  const h2Styles = StyleSheet.create({
    text: {
      fontFamily: 'Inter Regular',
      fontSize: font.sizeL,
      lineHeight: font.lineHeightL,
    },
  });
  
  export const H2Text = ({ children = '', style, theme='light' }) => (
    <Text style={[h2Styles.text, style]} theme={theme}>{children}</Text>
  );
  
  // H3 Text
  const h3Styles = StyleSheet.create({
    text: {
      fontFamily: 'Inter Regular',
      fontSize: font.sizeM,
      lineHeight: font.lineHeightM,
    },
  });
  
  export const H3Text = ({ children = '', style, theme='light' }) => (
    <Text style={[h3Styles.text, style]} theme={theme}>{children}</Text>
  );

  // H4 Text
  
  const h4Styles = StyleSheet.create({
    text: {
      fontFamily: 'Inter Regular',
      fontSize: font.sizeS,
      lineHeight: font.lineHeightS,
    },
  });
  
  export const H4Text = ({ children, style, theme='light' }) => (
    <Text style={[h4Styles.text, style]} theme={theme}>{children}</Text>
  );

  const h5Styles = StyleSheet.create({
    text: {
      fontFamily: 'PaytoneOne Regular',
      fontSize: font.sizeXXL,
      lineHeight: font.lineHeightXXL,
    },
  });
  
  export const H5Text = ({ children, style, theme='light' }) => (
    <Text style={[h5Styles.text, style]} theme={theme}>{children}</Text>
  );
  
  const h6Styles = StyleSheet.create({
    text: {
      fontFamily: 'Inter SemiBold',
      fontSize: font.sizeL,
      lineHeight: font.lineHeightL,
    },
  });
  
  export const H6Text = ({ children, style, theme='light' }) => (
    <Text style={[h6Styles.text, style]} theme={theme}>{children}</Text>
  );
  export default Text;
 