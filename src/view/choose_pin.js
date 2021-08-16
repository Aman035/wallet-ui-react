import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import MainContent from '../components/main-content';
import { H3Text, H6Text } from '../components/text';
import { PinSecret, PinPad } from '../components/pin';

//choose Pin View

const ChoosePin = ({ store, auth }) => {
  const styles = StyleSheet.create({
    content: {
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: store.theme.color.fill,
    },
    title: {
      marginTop: 50,
      color: store.theme.color.stroke,
    },
    text: {
      marginTop: 10,
      textAlign: 'center',
      color: store.theme.color.neutral7,
    },
    pinwrap: {
      paddingTop: 30,
      paddingBottom: 60,
    },
  });

  return (
    <MainContent style={styles.content}>
      <H6Text style={styles.title}>Choose a PIN</H6Text>
      <H3Text style={styles.text}>Make Sure you can remember it.</H3Text>
      <View style={styles.pinwrap}>
        <PinSecret pin={store.auth.newPin} stroke={store.theme.color.stroke} />
      </View>
      <PinPad
        onInput={(digit) => auth.pushPinDigit({ digit, param: 'newPin' })}
        onBackspace={() => auth.popPinDigit({ param: 'newPin' })}
        stroke={store.theme.color.stroke}
        secondary={store.theme.color.neutral7}
      />
    </MainContent>
  );
};

export default observer(ChoosePin);
