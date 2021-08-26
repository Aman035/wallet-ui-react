import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainContent from '../components/main-content';
import { H6Text, H3Text } from '../components/text';
import { Button2_Small } from '../components/button';
import RightArrowIcon from '../assets/icon/filled/ArrowRight';
import { Setting_Header } from '../components/header';
import { CircularContainer } from '../components/container';
import CheckIcon from '../assets/icon/filled/Check';
import gStyle from '../components/globalStyleSheet';

export const Home1 = ({ store }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);
  const styles = StyleSheet.create({
    heading1: {
      marginTop: 40,
      paddingHorizontal: 50,
    },
    heading2: {
      marginVertical: 15,
      paddingHorizontal: 30,
    },
    button: {
      backgroundColor: store.theme.primary.bitcoin_blue,
      marginTop: 25,
      maxWidth: '80%',
      marginHorizontal: 'auto',
    },
    iconContainer: {
      backgroundColor: store.theme.primary.green,
    },
  });

  return (
    <MainContent style={gstyles.container}>
      <Setting_Header color={color.stroke} />
      <View style={[{ flex: 1 }, gstyles.align]}>
        <CircularContainer style={[styles.iconContainer, gstyles.align]}>
          <CheckIcon color={color.fill} />
        </CircularContainer>
        <H6Text style={[gstyles.text, styles.heading1]}>
          You are all set to receive Bitcoin
        </H6Text>
        <H3Text style={[gstyles.secText, styles.heading2]}>
          Ask others to send you Bitcoin, or top up the wallet yourself.
        </H3Text>
        <Button2_Small style={styles.button}>
          <H3Text style={gstyles.btnText}>
            View address
            <RightArrowIcon
              color={color.fill}
              height={20}
              width={35}
            />
          </H3Text>
        </Button2_Small>
      </View>
    </MainContent>
  );
};

export default Home1;
