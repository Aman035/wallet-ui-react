import React, { useState } from 'react';
import { View ,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MainContent from '../components/main-content';
import { H1Text ,H3Text , H6Text} from '../components/text';
import { PinSecret, PinPad } from '../components/pin';
import { color } from '../components/style';

//
// Set Pin View (Mobile)
//

const styles = StyleSheet.create({
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    marginTop: 50,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    color : color.grey
  },
  pinwrap : {
    paddingTop: 30,
    paddingBottom: 60
  }
});

const ChoosePin = () => {

    const [pin,setPin] = useState('');

    const pushPin = async(val)=>{
        if(pin.length <4)
        setPin(pin + val);
    }

    const popPin = ()=>{
        if(pin.length>0)
        setPin(pin.slice(0, -1));
    }

    return(
    <MainContent style={styles.content}>
      <H6Text style={styles.title}>Choose a PIN</H6Text>
      <H3Text style={styles.text}>
        Make Sure you can remember it.
      </H3Text>
      <View style={styles.pinwrap}>
        <PinSecret pin={pin} />
      </View>
      <PinPad
        onInput={pushPin}
        onBackspace={popPin}
      />
    </MainContent>
)};

export default ChoosePin;
