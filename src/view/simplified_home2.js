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
import { Button2 } from '../components/button';
import ArrowUpIcon from '../assets/icon/filled/ArrowUp';
import ArrowDownIcon from '../assets/icon/filled/ArrowDown';
import ArrowRightIcon from '../assets/icon/filled/ArrowRight';
import CarretUpIcon from '../assets/icon/filled/CaretUp';
import BitcoinIcon from '../assets/icon/filled/Bitcoin';
import { H3Text, H4Text } from '../components/text';
import gStyle from '../components/globalStyleSheet';

const Simplified_Home2 = ({ store }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);
  const styles = StyleSheet.create({
    container1: {
      flex: 4,
    },
    container2: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    button: {
      borderColor: color.neutral7,
      borderWidth: 1.5,
      width: 130,
      height: 85,
      marginHorizontal: 8,
    },
    label: {
      paddingVertical: 10,
    },
    smallabel: {
      paddingBottom: 40,
    },
    btnContainer: {
      flexDirection: 'row',
      marginVertical : 15,
      paddingHorizontal : 10
    },
  });

  return (
    <MainContent style={gstyles.container}>
      <Setting_Header color={color.stroke} />
      <View style={[gstyles.align, styles.container1]}>
        <SingleBedIcon height={60} width={60} color={color.stroke} />
        <BalanceLabel style={styles.label}>
          <BalanceLabelNumeral>
            <H3Text style={gstyles.text}>
              <BitcoinIcon color={color.stroke} height={20} />
              1.6240 2785
            </H3Text>
          </BalanceLabelNumeral>
        </BalanceLabel>
        <SmallBalanceLabel style={[gstyles.secText, styles.smallabel]}>
          $41,328.9
        </SmallBalanceLabel>
        <View style={styles.btnContainer}>
          <Button2 style={styles.button}>
            <ArrowUpIcon color={color.stroke}/>
            <H4Text style={gstyles.secText}>Send</H4Text>
          </Button2>
          <Button2 style={styles.button}>
            <ArrowDownIcon color={color.stroke} height={35} />
            <H4Text style={gstyles.secText}>Receive</H4Text>
          </Button2>
        </View>
        <View style={styles.btnContainer}>
          <View style={{ flex: 4 }}>
            <H3Text style={[gstyles.text , {textAlign : 'left'}]}>
            Set a recovery email and sleep more peacefully.
            </H3Text>
          </View>
          <View style={[gstyles.align, {flex : 1}]}>
          <ArrowRightIcon color={color.stroke} width={40}/>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <CarretUpIcon color={color.stroke} height={40} />
        <H3Text style={gstyles.text}>1 transaction today</H3Text>
      </View>
    </MainContent>
  );
};

export default Simplified_Home2;
