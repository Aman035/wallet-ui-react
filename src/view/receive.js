import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainContent from '../components/main-content';
import Qr from '../assets/img/qr';
import { Back_Header } from '../components/header';
import { H3Text } from '../components/text';
import { FlexContainer } from '../components/container';
import Input from '../components/input';
import { Button2_Small } from '../components/button';

const ReceiveView = ({ store }) => {
  const stroke = store.theme.color.stroke;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: store.theme.color.fill,
    },
    header: {
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    text: {
      color: stroke,
    },
    btntext: {
      color: store.theme.color.fill,
    },
    flexView1: {
      flex: 1,
      alignItems: 'flex-start',
    },
    flexView2: {
      flex: 1,
      alignItems: 'flex-end',
    },
    btn: {
      backgroundColor: store.theme.primary.bitcoin_blue,
      marginTop: 'auto',
      marginBottom: 30,
      marginHorizontal: 20,
    },
  });

  return (
    <MainContent style={styles.container}>
      <Back_Header color={stroke} style={styles.header} />
      <Qr color={stroke} />
      <View style={{ paddingHorizontal: 10, paddingVertical: 30 }}>
        <FlexContainer style={{ paddingVertical: 10 }}>
          <View style={styles.flexView1}>
            <H3Text style={styles.text}>Address</H3Text>
          </View>
          <View style={styles.flexView2}>
            <H3Text style={styles.text}>b146...38bu</H3Text>
          </View>
        </FlexContainer>
        <Input placeholder="Add amount" style={{ color: stroke }} />
        <Input placeholder="Add description" style={{ color: stroke }} />
      </View>
      <Button2_Small style={styles.btn}>
        <H3Text style={styles.btntext}>Share</H3Text>
      </Button2_Small>
    </MainContent>
  );
};
export default ReceiveView;
