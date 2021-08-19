import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { font } from './style';
import { H3Text, H4Text } from './text';
import { primary } from './themeColor';

const Transaction = ({ type, btc, time, amt, style, colors }) => {
  
  const styles = StyleSheet.create({
    container: {
      borderTopColor: colors.neutral3,
      borderTopWidth: 1,
      flexDirection: 'row',
      paddingVertical: 26,
      paddingHorizontal: 10,
      marginHorizontal : 30,
      width: '92%',
    },
    text: {
      color: colors.stroke,
    },
    secText: {
      color: colors.neutral7,
      lineHeight : 35,
      fontSize : 16
    },
    recText: {
      color: primary.green,
    },
    flexContainer1 : {
        flex: 4,
        alignItems: 'flex-start', 
        minWidth: 100
    },
    flexContainer2 : {
        flex: 4,
        alignItems: 'flex-end', 
        minWidth: 100
    },
    picContainer : {
        paddingRight: 6 
    }
  });
 
  return (
    <View style={[styles.container, style]}>
      <View style={styles.picContainer}>
        <Image
          source={require('../assets/img/profile.png')}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <View style={styles.flexContainer1}>
        <H3Text style={styles.text}>{type}</H3Text>
        <H4Text style={styles.secText}>{time}</H4Text>
      </View>
      <View style={styles.flexContainer2}>
        <H3Text
          style={
            (type === 'Received' || type === 'Receiving...') ? styles.recText : styles.text
          }
        >
          {btc}
        </H3Text>
        <H4Text style={styles.secText}>{amt}</H4Text>
      </View>
    </View>
  );
};

export default Transaction;
