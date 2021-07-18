import React from 'react';
import { StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import { H3Text , H4Text } from './text';
import Button from './button';
import BackspaceIcon from '../assets/icon/backspace';
import './font';

const keyboardStyles = StyleSheet.create({
    wrapper: {
      alignSelf: 'stretch',
      flexDirection: 'row',
    },
    column: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  
  export const PinKeyboard = ({onInput, onBackspace}) => (
    <View style={keyboardStyles.wrapper}>
      <View style={keyboardStyles.column}>
        <View style={keyboardStyles.row}>
          <PinKey onPress={onInput} num="1" />
          <PinKey onPress={onInput} num="2" label="ABC" />
          <PinKey onPress={onInput} num="3" label="DEF" />
        </View>
        <View style={keyboardStyles.row}>
          <PinKey onPress={onInput} num="4" label="GHI" />
          <PinKey onPress={onInput} num="5" label="JKL" />
          <PinKey onPress={onInput} num="6" label="MNO" />
        </View>
        <View style={keyboardStyles.row}>
          <PinKey onPress={onInput} num="7" label="PQRS" />
          <PinKey onPress={onInput} num="8" label="TUV" />
          <PinKey onPress={onInput} num="9" label="WXYZ" />
        </View>
        <View style={keyboardStyles.row}>
          <PinKey onPress={() => {}} />
          <PinKey onPress={onInput} num="0" />
          <BackspaceKey onPress={onBackspace} />
        </View>
      </View>
    </View>
  );
  
  PinKeyboard.propTypes = {
    onInput: PropTypes.func,
    onBackspace: PropTypes.func
  };
  
  // Pin Key
  const keyStyles = StyleSheet.create({
    btn: {
      flex: 1,
      paddingTop: 30,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'Inter Regular',
      fontSize: 24,
      lineHeight: 24,
    },
    label: {
      fontFamily: 'Inter Regular',
      fontSize: 10,
      lineHeight: 10,
    },
  });
  
  const PinKey = ({ num, label, onPress }) => (
    <Button onPress={() => onPress(num)} style={keyStyles.btn}>
        <H3Text style={keyStyles.text}>{num}</H3Text>
        <H4Text style={keyStyles.label}>{label}</H4Text>
    </Button>
  );
  
  PinKey.propTypes = {
    num: PropTypes.string,
    label: PropTypes.string,
    onPress: PropTypes.func,
  };
  
  // Backspace Key
  const backStyles = StyleSheet.create({
    btn: {
      paddingTop: 35,
      paddingLeft: 5,
    },
  });
  
  const BackspaceKey = ({ onPress }) => (
    <Button onPress={onPress} style={[keyStyles.btn, backStyles.btn]}>
      <BackspaceIcon/>
    </Button>
  );
  
  BackspaceKey.propTypes = {
    onPress: PropTypes.func.isRequired,
  };
  
  