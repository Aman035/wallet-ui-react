import React from 'react';
import { View,StyleSheet } from 'react-native';
import { H3Text, H4Text } from './text';
import {primary} from './themeColor';

const Transaction  = ({ type,btc,time,amt,style,colors })=>{
    console.log(colors);
    const styles = StyleSheet.create({
        container : {
            borderTopColor : colors.neutral3,
            borderTopWidth : 2,
            flexDirection : 'row',
            paddingVertical : 26,
            marginHorizontal : 30,
            width : '100%'
        },
        text : {
            color : colors.stroke
        },
        secText : {
            color : colors.neutral7
        },
        recText : {
            color : primary.green
        }
    })

    return(
    <View style={[styles.container , style]}>
        <View style={{flex : 1  , alignItems : 'flex-start'}}>
            <H3Text style={styles.text}>{type}</H3Text>
            <H4Text style={styles.secText}>{time}</H4Text>
        </View>
        <View style={{flex : 1 , alignItems : 'flex-end'}}>
            <H3Text style={type === 'Received' || 'Receiving' ? styles.recText : styles.text}>{btc}</H3Text>
            <H4Text style={styles.secText}>{amt}</H4Text>
        </View>
    </View>
)};

export default Transaction;