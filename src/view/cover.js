import React from 'react';
import { Button2 } from '../components/button';
import { View, StyleSheet } from 'react-native';
import MattressLogo from '../assets/icon/myMattress/Logo';
import { H5Text, H3Text } from '../components/text';
import MainContent from '../components/main-content';

const Cover = ({ store }) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: store.theme.color.fill,
    },
    heading: {
      paddingVertical: 20,
    },
    btn: {
      backgroundColor: store.theme.primary.bitcoin_blue,
      marginTop: 'auto',
      marginBottom: 20,
    },
    text: {
      color: store.theme.color.stroke,
    },
    btnText: {
      color: store.theme.color.fill,
    },
  });

  return (
    <MainContent style={styles.container}>
      <MattressLogo color={store.theme.color.stroke} />
      <H5Text style={styles.text}>My Matress</H5Text>
      <View style={styles.heading}>
        <H3Text style={styles.text}>Rest in peace.</H3Text>
      </View>
      <Button2 style={styles.btn} onPress={() => {}}>
        <H3Text style={styles.btnText}>Make my bed</H3Text>
      </Button2>
    </MainContent>
  );
};

export default Cover;
