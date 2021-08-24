import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainContent from '../components/main-content';
import { H3Text, H6Text } from '../components/text';
import { PinSecret, PinPad } from '../components/pin';
import {observer} from 'mobx-react';
//Login By Pin View

const LoginPin = ({ store, auth }) => {
  const styles = StyleSheet.create({
    content: {
      padding: 20,
      paddingTop: 80,
      backgroundColor: store.theme.color.fill,
    },
    title: {
      color: store.theme.color.stroke,
    },
    text: {
      marginTop: 10,
      color: store.theme.color.neutral7,
    },
    pinwrap: {
      paddingVertical: 30,
    },
  });

  return (
    <MainContent style={styles.content}>
      <H6Text style={styles.title}>Enter Your PIN to log in</H6Text>
      <View style={styles.pinwrap}>
        <PinSecret pin={store.auth.pin} stroke={store.theme.color.stroke} border={store.theme.color.stroke}/>
      </View>
      <View style={styles.pinwrap}>
        <H3Text style={styles.title}>Forgot Pin?</H3Text>
      </View>
      <PinPad
        onInput={(digit) => auth.pushPinDigit({ digit, param: 'pin' })}
        onBackspace={() => auth.popPinDigit({ param: 'pin' })}
        stroke={store.theme.color.stroke}
        secondary={store.theme.color.neutral7}
      />
    </MainContent>
  );
};

export default observer(LoginPin);
