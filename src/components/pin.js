import React from 'react';
import { StyleSheet, View ,ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import { H3Text , H4Text } from './text';
import Button from './button';
import BackspaceIcon from '../assets/icon/filled/ClearCharacter';
import {color} from './style';
import './font';

// Pin Entry
const pinEntryStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const PinSecret = ({ pin, style, stroke }) => (
  <View style={[pinEntryStyles.wrapper, style]}>
    <PinBubble pin_num={pin[0]} stroke={stroke}/>
    <PinBubble pin_num={pin[1]} stroke={stroke}/>
    <PinBubble pin_num={pin[2]} stroke={stroke}/>
    <PinBubble pin_num={pin[3]} stroke={stroke}/>
  </View>
);

PinSecret.propTypes = {
  pin: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

// Pin Bubble

const PinBubble = ({ pin_num, stroke }) =>{

  const bubbleStyles = StyleSheet.create({
    bubble: {
      margin: 4.5,
      height: 20,
      width: 20,
      borderRadius: '100%',
      borderColor: stroke,
      borderStyle: 'solid',
      borderWidth: 2.5,
    },
    filled: {
      backgroundColor : stroke
    },
  });

 return(
  <View style={[bubbleStyles.bubble, pin_num ? bubbleStyles.filled : null]} />
);
 }

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
  
  export const PinPad = ({onInput, onBackspace , stroke , secondary}) => (
    <View style={pinpadStyles.wrapper}>
      <View style={pinpadStyles.column}>
        <View style={pinpadStyles.row}>
          <PinKey onPress={onInput} num="1" stroke={stroke} secondary={secondary}/>
          <PinKey onPress={onInput} num="2" label="ABC" stroke={stroke} secondary={secondary}/>
          <PinKey onPress={onInput} num="3" label="DEF" stroke={stroke} secondary={secondary}/>
        </View>
        <View style={pinpadStyles.row}>
          <PinKey onPress={onInput} num="4" label="GHI" stroke={stroke} secondary={secondary}/>
          <PinKey onPress={onInput} num="5" label="JKL" stroke={stroke} secondary={secondary}/>
          <PinKey onPress={onInput} num="6" label="MNO" stroke={stroke} secondary={secondary}/>
        </View>
        <View style={pinpadStyles.row}>
          <PinKey onPress={onInput} num="7" label="PQRS" stroke={stroke} secondary={secondary}/>
          <PinKey onPress={onInput} num="8" label="TUV" stroke={stroke} secondary={secondary}/>
          <PinKey onPress={onInput} num="9" label="WXYZ" stroke={stroke} secondary={secondary}/>
        </View>
        <View style={pinpadStyles.row}>
          <PinKey onPress={() => {}} />
          <PinKey onPress={onInput} num="0" stroke={stroke} secondary={secondary}/>
          <PinKey num="back" onPress={onBackspace} stroke={stroke} secondary={secondary}/>
        </View>
      </View>
    </View>
  );
  
  PinPad.propTypes = {
    onInput: PropTypes.func,
    onBackspace: PropTypes.func
  };
  
  // Pin Key
  
  const PinKey = ({ num, label, onPress, stroke, secondary }) => {

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
        lineHeight: 27,
        color : stroke
      },
      label: {
        fontFamily: 'Inter Regular',
        fontSize: 13,
        lineHeight: 18,
        color : secondary
      },
    });

    if(num == "back"){
      return(
        <Button onPress={onPress} style={[keyStyles.btn, backStyles.btn]}>
        <BackspaceIcon color={stroke} height={30} width={30}/>
      </Button>
      )
    }
    else
    return(
    <Button onPress={() => onPress(num)} style={keyStyles.btn}>
        <H3Text style={keyStyles.text}>{num}</H3Text>
        <H4Text style={keyStyles.label}>{label}</H4Text>
    </Button>
  )};
  
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
  
  