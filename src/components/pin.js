import React from 'react';
import { StyleSheet, View ,ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import { H3Text , H4Text } from './text';
import Button from './button';
import BackspaceIcon from '../assets/icon/backspace';
import {color} from './style';
import './font';

// Pin Entry
const pinEntryStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const PinSecret = ({ pin, style }) => (
  <View style={[pinEntryStyles.wrapper, style]}>
    <PinBubble pin_num={pin[0]} />
    <PinBubble pin_num={pin[1]} />
    <PinBubble pin_num={pin[2]} />
    <PinBubble pin_num={pin[3]} />
  </View>
);

PinSecret.propTypes = {
  pin: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

// Pin Bubble
const bubbleStyles = StyleSheet.create({
  bubble: {
    margin: 4.5,
    height: 20,
    width: 20,
    backgroundColor: color.white,
    borderRadius: '100%',
    borderColor: color.black,
    borderStyle: 'solid',
    borderWidth: 2.5,
  },
  filled: {
    backgroundColor : color.black
  },
});

const PinBubble = ({ pin_num }) => (
  <View style={[bubbleStyles.bubble, pin_num ? bubbleStyles.filled : null]} />
);

PinBubble.propTypes = {pin_num: PropTypes.string};

//Pin Pad
const pinpadStyles = StyleSheet.create({
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
  
  export const PinPad = ({onInput, onBackspace}) => (
    <View style={pinpadStyles.wrapper}>
      <View style={pinpadStyles.column}>
        <View style={pinpadStyles.row}>
          <PinKey onPress={onInput} num="1" />
          <PinKey onPress={onInput} num="2" label="ABC" />
          <PinKey onPress={onInput} num="3" label="DEF" />
        </View>
        <View style={pinpadStyles.row}>
          <PinKey onPress={onInput} num="4" label="GHI" />
          <PinKey onPress={onInput} num="5" label="JKL" />
          <PinKey onPress={onInput} num="6" label="MNO" />
        </View>
        <View style={pinpadStyles.row}>
          <PinKey onPress={onInput} num="7" label="PQRS" />
          <PinKey onPress={onInput} num="8" label="TUV" />
          <PinKey onPress={onInput} num="9" label="WXYZ" />
        </View>
        <View style={pinpadStyles.row}>
          <PinKey onPress={() => {}} />
          <PinKey onPress={onInput} num="0" />
          <BackspaceKey onPress={onBackspace} />
        </View>
      </View>
    </View>
  );
  
  PinPad.propTypes = {
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
  
  