import React, { useState } from 'react';
import { View ,StyleSheet } from 'react-native';
import MainContent from '../components/main-content';
import {H3Text , H6Text} from '../components/text';
import { PinSecret, PinPad } from '../components/pin';

//Login By Pin View
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
  },
  pinwrap : {
    paddingTop: 30,
    paddingBottom: 60
  },
  forgotwrap : {
      paddingTop : 40,
      paddingBottom : 30
  }
});

const LoginPin = () => {

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
      <H6Text style={styles.title}>Enter Your PIN to log in</H6Text>
      <View style={styles.pinwrap}>
        <PinSecret pin={pin} />
      </View>
      <View style = {styles.forgotwrap}>
        <H3Text style={styles.text}>
            Forgot Pin?
        </H3Text>
      </View>
      <PinPad
        onInput={pushPin}
        onBackspace={popPin}
      />
    </MainContent>
)};

export default LoginPin;
