import React from 'react';
import { Button2 } from '../components/button';
import { View, StyleSheet } from 'react-native';
import MattressLogo from '../assets/icon/myMattress/Logo';
import { H5Text, H3Text } from '../components/text';
import MainContent from '../components/main-content';
import gStyle from '../components/globalStyleSheet';

const Cover = ({ store }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);
  const styles = StyleSheet.create({
    container1: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container2: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    btn: {
      backgroundColor: store.theme.primary.bitcoin_blue,
    },
    text : {
      paddingVertical : 7
    }
  });

  return (
    <MainContent style={gstyles.container}>
      <View style={styles.container1}>
        <MattressLogo color={color.stroke}/>
        <H5Text style={gstyles.text}>My Matress</H5Text>
        <H3Text style={[gstyles.text, styles.text]}>Rest in peace.</H3Text>
      </View>
      <View style={styles.container2}>
        <Button2 style={styles.btn} onPress={() => {}}>
          <H3Text style={gstyles.btnText}>Make my bed</H3Text>
        </Button2>
      </View>
    </MainContent>
  );
};

export default Cover;
