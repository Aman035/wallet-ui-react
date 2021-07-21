import React, { useState } from 'react';
import { View ,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MainContent from '../components/main-content';
import { H1Text ,H3Text} from '../components/text';
import { PinSecret, PinPad } from '../components/pin';

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
    maxWidth: 250,
  },
  pinwrap : {
    paddingTop: 30,
    paddingBottom: 30
  }
});

const ChoosePin = () => {

    const [pin,setPin] = useState('');

    const pushPin = (val)=>{

        console.log(val);
    }

    const popPin = ()=>{
        console.log("Pop");
    }

    return(
    <MainContent style={styles.content}>
      <H1Text style={styles.title}>Set PIN</H1Text>
      <H3Text style={styles.text}>
        Type the PIN you want to use to unlock your wallet.
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
