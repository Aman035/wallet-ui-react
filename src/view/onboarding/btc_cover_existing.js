import React from 'react';
import Button,{ Button2 } from '../../components/button';
import { View, StyleSheet } from 'react-native';
import BitcoinCircleLogo from '../../assets/icon/filled/BitcoinCircle';
import { H4Text, H3Text,H6Text } from '../../components/text';
import MainContent from '../../components/main-content';


const BtcCoverExisting = ({ store }) => {

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: store.theme.color.fill,
      paddingTop : 50
    },
    heading: {
      paddingVertical: 20,
    },
    btn: {
      backgroundColor: store.theme.primary.bitcoin_orange,
      marginVertical : 30
    },
    text: {
      color: store.theme.color.stroke,
      fontSize : 40,
      paddingTop : 40,
      textAlign : 'center',
      lineHeight : 40
    },
    btnText: {
      color: store.theme.color.fill
    },
    secText : {
        color : store.theme.color.neutral7,
        textAlign : 'center',
        paddingVertical : 30,
        fontSize : 24
    },
    restoreTxt : {
        color : store.theme.primary.bitcoin_orange,
        textAlign : 'center',
        lineHeight : 30,
        fontSize : 16
    },
    footerTxt : {
        color : store.theme.color.neutral7,
        textAlign : 'center',
        lineHeight : 24,
        fontSize : 16
    }
  });

  return (
    <MainContent style={styles.container}>
        <BitcoinCircleLogo color={store.theme.primary.bitcoin_orange} height={120} width={120}/>
        <H6Text style={styles.text}>Bitcoin Wallet</H6Text>
        <H3Text style={styles.secText}>Welcome back.</H3Text>
        <Button2 style={styles.btn}><H3Text style={styles.btnText}>Log in</H3Text></Button2>
        <View style={{ marginTop : 'auto' }}>
            <Button><H4Text style= {styles.restoreTxt}>Reset wallet</H4Text></Button>
            <H4Text style= {styles.footerTxt}>Your wallet, your coins</H4Text>
            <H4Text style= {styles.footerTxt}>100% open-source & open-design</H4Text>
        </View>
    </MainContent>
  );
};

export default BtcCoverExisting;
