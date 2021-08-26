import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainContent from '../components/main-content';
import Qr from '../assets/img/qr';
import { Back_Header } from '../components/header';
import { H3Text } from '../components/text';
import { FlexContainer } from '../components/container';
import Input from '../components/input';
import { Button2_Small } from '../components/button';
import gStyle from '../components/globalStyleSheet';

const ReceiveView = ({ store }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);
  const styles = StyleSheet.create({
    container1: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 20,
    },
    flexContainer: {
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: color.neutral5,
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
    },
  });

  return (
    <MainContent style={gstyles.container}>
      <Back_Header color={color.stroke} />
      <View style={styles.container1}>
        <Qr />
        <FlexContainer style={{ paddingVertical: 15 }}>
          <View style={styles.flexView1}>
            <H3Text style={gstyles.text}>Address</H3Text>
          </View>
          <View style={styles.flexView2}>
            <H3Text style={gstyles.text}>b146...38bu</H3Text>
          </View>
        </FlexContainer>
        <FlexContainer style={styles.flexContainer}>
          <Input placeholder="Add amount" style={{ color: color.stroke }} />
        </FlexContainer>
        <FlexContainer style={styles.flexContainer}>
          <Input
            placeholder="Add description"
            style={{ color: color.stroke }}
          />
        </FlexContainer>
      </View>
      <View>
        <Button2_Small style={styles.btn}>
          <H3Text style={gstyles.btnText}>Share</H3Text>
        </Button2_Small>
      </View>
    </MainContent>
  );
};
export default ReceiveView;
