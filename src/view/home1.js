import React from 'react';
import { StyleSheet } from 'react-native';
import MainContent from '../components/main-content';
import { H6Text, H3Text } from '../components/text';
import { color } from '../components/style';
import { Button2_Small } from '../components/button';
import RightArrowIcon from '../assets/icon/filled/ArrowRight';
import { Setting_Header } from '../components/header';
import CircularContainer from '../components/circular-container';
import CheckIcon from '../assets/icon/filled/Check';

export const Home1 = ({ store }) => {
  const styles = StyleSheet.create({
    contain: {
      backgroundColor: store.theme.color.fill,
    },
    header: {
      padding: 20,
      alignSelf: 'flex-end',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
    },
    heading1: {
      marginTop: 40,
      textAlign: 'center',
      paddingHorizontal: 90,
      color: store.theme.color.stroke,
    },
    heading2: {
      color: color.grey,
      marginVertical: 15,
      textAlign: 'center',
      paddingHorizontal: 50,
      color: store.theme.color.neutral7,
    },
    button: {
      backgroundColor: color.bitcoin_blue,
      width: '50%',
      marginHorizontal: 'auto',
      marginTop: 25,
    },
    btnTxt: {
      color: store.theme.color.fill,
    },
    iconContainer: {
      backgroundColor: store.theme.primary.green,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <MainContent style={styles.contain}>
      <Setting_Header color={store.theme.color.stroke} />
      <MainContent style={styles.container}>
        <CircularContainer style={styles.iconContainer}>
          <CheckIcon color={store.theme.color.fill} />
        </CircularContainer>
        <H6Text style={styles.heading1}>
          You are all set to receive Bitcoin
        </H6Text>
        <H3Text style={styles.heading2}>
          Ask others to send you Bitcoin, or top up the wallet yourself.
        </H3Text>
        <Button2_Small style={styles.button}>
          <H3Text style={styles.btnTxt}>
            View address{'  '}
            <RightArrowIcon
              color={store.theme.color.fill}
              height={20}
              width={20}
            />
          </H3Text>
        </Button2_Small>
      </MainContent>
    </MainContent>
  );
};

export default Home1;
