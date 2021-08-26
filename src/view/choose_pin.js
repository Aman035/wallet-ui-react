import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import MainContent from '../components/main-content';
import { H3Text, H6Text } from '../components/text';
import { PinSecret, PinPad } from '../components/pin';
import gStyle from '../components/globalStyleSheet';

const ChoosePin = ({ store, auth }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);
  const styles = StyleSheet.create({
    container1: {
      flex: 1,
    },
    container2: {
      flex: 2,
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
          pin={store.auth.newPin}
          stroke={color.stroke}
          border={color.stroke}
        />
      </View>
      <View style={styles.container2}>
        <PinPad
          onInput={(digit) => auth.pushPinDigit({ digit, param: 'newPin' })}
          onBackspace={() => auth.popPinDigit({ param: 'newPin' })}
          stroke={color.stroke}
          secondary={color.neutral7}
        />
      </View>
    </MainContent>
  );
};

export default observer(ChoosePin);
