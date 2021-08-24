import React from 'react';
import Button, { Button2 } from '../../components/button';
import { View, StyleSheet } from 'react-native';
import BitcoinCircleLogo from '../../assets/icon/filled/BitcoinCircle';
import { H4Text, H3Text, H6Text } from '../../components/text';
import MainContent from '../../components/main-content';
import gStyle from '../../components/globalStyleSheet';

const BtcCoverExisting = ({ store }) => {
  const color = store.theme.color;
  const gstyle = gStyle(color);
  const cstyle = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
    },
    container1: {
      flex: 3,
    },
    container2: {
      flex: 1,
    },
    btn: {
      backgroundColor: store.theme.primary.bitcoin_orange,
      marginTop: 30,
    },
    text: {
      fontSize: 40,
      paddingTop: 40,
      lineHeight: 40,
    },
    secText: {
      paddingVertical: 30,
      fontSize: 24,
    },
    restoreTxt: {
      color: store.theme.primary.bitcoin_orange,
      lineHeight: 30,
      fontSize: 16,
    },
    footerTxt: {
      lineHeight: 24,
      fontSize: 16,
    },
  });

  return (
    <MainContent style={[gstyle.container, cstyle.container]}>
      <View style={[gstyle.align, cstyle.container1]}>
        <BitcoinCircleLogo
          color={store.theme.primary.bitcoin_orange}
          height={120}
          width={120}
        />
        <H6Text style={[gstyle.text, cstyle.text]}>Bitcoin Wallet</H6Text>
        <H3Text style={[gstyle.secText, cstyle.secText]}>Welcome back.</H3Text>
        <Button2 style={cstyle.btn}>
          <H3Text style={gstyle.btnText}>Log in</H3Text>
        </Button2>
      </View>
      <View style={[gstyle.align, cstyle.container2]}>
        <Button>
          <H4Text style={cstyle.restoreTxt}>Reset wallet</H4Text>
        </Button>
        <H4Text style={[gstyle.secText, cstyle.footerTxt]}>
          Your wallet, your coins
        </H4Text>
        <H4Text style={[gstyle.secText, cstyle.footerTxt]}>
          100% open-source & open-design
        </H4Text>
      </View>
    </MainContent>
  );
};

export default BtcCoverExisting;
