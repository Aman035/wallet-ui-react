import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import MainContent from '../components/main-content';
import { H3Text, H6Text } from '../components/text';
import { PinSecret, PinPad } from '../components/pin';
import gStyle from '../components/globalStyleSheet';

const Login = ({ store, auth }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);
  const styles = StyleSheet.create({
    container1: {
      flex: 2,
    },
    container2: {
      flex: 1,
    },
    container3: {
      flex: 4,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    secText: {
      paddingVertical: 20,
    },
  });

  return (
    <MainContent style={gstyles.container}>
      <View style={[gstyles.align, styles.container1]}>
        <H6Text style={gstyles.text}>Choose a PIN</H6Text>
        <H3Text style={[gstyles.secText, styles.secText]}>
          Make Sure you can remember it.
        </H3Text>
        <PinSecret
          pin={store.auth.pin}
          stroke={color.stroke}
          border={color.stroke}
        />
      </View>
      <View style={[gstyles.align, styles.container2]}>
        <H3Text style={[gstyles.text, styles.secText]}>Forgot Pin?</H3Text>
      </View>
      <View style={styles.container3}>
        <PinPad
          onInput={(digit) => auth.pushPinDigit({ digit, param: 'pin' })}
          onBackspace={() => auth.popPinDigit({ param: 'pin' })}
          stroke={color.stroke}
          secondary={color.neutral7}
        />
      </View>
    </MainContent>
  );
};

export default observer(Login);
