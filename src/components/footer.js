import React from 'react';
import {View , StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import CaretUpIcon from '../assets/icon/outline/CaretUp';
import { color } from './style';
import { H3Text } from './text';
const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        paddingBottom : 20
    }
})
const Footer = ({children})=>(
     <View style={styles.container}>
         <CaretUpIcon/>
         <H3Text>{children}</H3Text>
     </View>
);
Footer.propTypes = {
    children: PropTypes.node,
};

export const LightFooter = ({children})=>(
    <View style={styles.container}>
        <CaretUpIcon stroke="#fff"/>
        <H3Text style={{color : color.white}}>{children}</H3Text>
    </View>
);
LightFooter.propTypes = {
    children: PropTypes.node,
};

export default Footer;

