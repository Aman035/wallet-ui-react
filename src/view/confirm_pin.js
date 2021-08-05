import React from 'react';
import { View ,StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import MainContent from '../components/main-content';
import {H3Text , H6Text} from '../components/text';
import { PinSecret, PinPad } from '../components/pin';
import { color } from '../components/style';


//Confirm Pin View
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

const ConfirmPin = ({store , auth}) => {
    return(
    <MainContent style={styles.content}>
      <H6Text style={styles.title}>Confirm your PIN</H6Text>
      <H3Text style={styles.text}>
        Did you remember it?
      </H3Text>
      <View style={styles.pinwrap}>
        <PinSecret pin={store.auth.pinVerify} />
      </View>
      <PinPad
        onInput={digit => auth.pushPinDigit({ digit, param: 'pinVerify' })}
        onBackspace={() => auth.popPinDigit({ param: 'pinVerify' })}
      />
    </MainContent>
)};

export default observer(ConfirmPin);
