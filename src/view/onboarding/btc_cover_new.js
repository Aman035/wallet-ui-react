import React from 'react';
import Button, { Button2 } from '../../components/button';
import { View, StyleSheet } from 'react-native';
import BitcoinCircleLogo from '../../assets/icon/filled/BitcoinCircle';
import { H4Text, H3Text, H6Text } from '../../components/text';
import MainContent from '../../components/main-content';
import gStyle from '../../components/globalStyleSheet';

const BtcCoverNew = ({ store }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);
  const styles = StyleSheet.create({
    container1: {
      flex: 6,
    },
    container2: {
      flex: 1,
    },
    btn: {
      backgroundColor: store.theme.primary.bitcoin_orange,
      marginVertical: 30,
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
      fontSize: 21,
    },
    footerTxt: {
      lineHeight: 24,
      fontSize: 16,
    },
  });

  return (
    <MainContent style={gstyles.container}>
      <View style={[gstyles.align, styles.container1]}>
        <BitcoinCircleLogo
          color={store.theme.primary.bitcoin_orange}
          height={120}
          width={120}
        />
        <H6Text style={[gstyles.text, styles.text]}>Bitcoin Wallet</H6Text>
        <H3Text style={[gstyles.secText, styles.secText]}>
          A simple bitcoin wallet for your enjoyment.
        </H3Text>
        <Button2 style={styles.btn}>
          <H3Text style={gstyles.btnText}>Create a new wallet</H3Text>
        </Button2>
        <Button>
          <H4Text style={styles.restoreTxt}>Restore existing wallet</H4Text>
        </Button>
      </View>
      <View style={[gstyles.align, styles.container2]}>
        <H4Text style={[gstyles.secText, styles.footerTxt]}>
          Your wallet, your coins
        </H4Text>
        <H4Text style={[gstyles.secText, styles.footerTxt]}>
          100% open-source & open-design
        </H4Text>
      </View>
    </MainContent>
  );
};

export default BtcCoverNew;
