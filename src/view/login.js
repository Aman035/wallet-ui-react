import React from 'react';
import { View ,StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
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

const LoginPin = ({store ,auth}) => {
    return(
    <MainContent style={styles.content}>
      <H6Text style={styles.title}>Enter Your PIN to log in</H6Text>
      <View style={styles.pinwrap}>
        <PinSecret pin={store.auth.pin} />
      </View>
      <View style = {styles.forgotwrap}>
        <H3Text style={styles.text}>
            Forgot Pin?
        </H3Text>
      </View>
      <PinPad
        onInput={digit => auth.pushPinDigit({ digit, param: 'pin' })}
        onBackspace={() => auth.popPinDigit({ param: 'pin' })}
      />
    </MainContent>
)};

export default observer(LoginPin);
