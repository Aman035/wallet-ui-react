import React from 'react';
import {View , StyleSheet} from 'react-native';
import CaretUpIcon from '../assets/icon/outline/CaretUp';
import { H3Text } from './text';
const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        paddingBottom : 20
    }
})
const Footer = ()=>(
     <View style={styles.container}>
         <CaretUpIcon/>
         <H3Text>1 transaction today</H3Text>
     </View>
)

export default Footer;

