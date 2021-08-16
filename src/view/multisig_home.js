import React from 'react';
import { View, StyleSheet } from 'react-native';
import SingleBedIcon from '../assets/icon/myMattress/singleBed';
import { Setting_Header } from '../components/header';
import MainContent from '../components/main-content';
import {
  BalanceLabel,
  BalanceLabelNumeral,
  SmallBalanceLabel,
} from '../components/label';
import { IconButton } from '../components/button';
import ArrowUpIcon from '../assets/icon/filled/ArrowUp';
import ArrowDownIcon from '../assets/icon/filled/ArrowDown';
import CarretUpIcon from '../assets/icon/filled/CaretUp';
import BitcoinIcon from '../assets/icon/filled/Bitcoin';
import { H3Text, H4Text } from '../components/text';
import Footer from '../components/footer';

const MultiSig_Home = ({ store }) => {
  const fill = store.theme.primary.bitcoin_blue;
  const stroke = '#fff';
  const secondary = '#fff';

  const styles = StyleSheet.create({
    container: {
      backgroundColor: fill,
    },
    centerContainer: {
      justifyContent: 'center',
    },
    button: {
      borderColor: secondary,
      borderRadius: 5,
      borderWidth: 0.5,
      width: 120,
      height: 70,
      marginHorizontal: 8,
    },
    label: {
      paddingVertical: 10,
    },
    smallabel: {
      color: secondary,
      paddingBottom: 40,
    },
    btnContainer: {
      flexDirection: 'row',
    },
    btntext: {
      color: secondary,
      paddingTop: 5,
    },
    text: {
      color: stroke,
    },
  });

  return (
    <MainContent style={styles.container}>
      <Setting_Header color={stroke} />
      <MainContent style={styles.centerContainer}>
        <SingleBedIcon height={60} width={60} color={stroke} />
        <BalanceLabel style={styles.label}>
          <BalanceLabelNumeral>
            <H3Text style={styles.text}>
              <BitcoinIcon color={stroke} height={20} />
              1.6240 2785
            </H3Text>
          </BalanceLabelNumeral>
        </BalanceLabel>
        <SmallBalanceLabel style={styles.smallabel}>
          $41,328.9
        </SmallBalanceLabel>
        <View style={styles.btnContainer}>
          <IconButton style={styles.button}>
            <ArrowUpIcon color={stroke} />
            <H4Text style={styles.btntext}>Send</H4Text>
          </IconButton>
          <IconButton style={styles.button}>
            <ArrowDownIcon color={stroke} />
            <H4Text style={styles.btntext}>Receive</H4Text>
          </IconButton>
        </View>
      </MainContent>
      <Footer>
        <CarretUpIcon color={stroke} />
        <H3Text style={styles.text}>1 transaction today</H3Text>
      </Footer>
    </MainContent>
  );
};

export default MultiSig_Home;
