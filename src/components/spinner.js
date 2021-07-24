import React from 'react';
import { ActivityIndicator , StyleSheet} from 'react-native';
import {color} from './style';

const styles = StyleSheet.create({
    spin : {
        
    }
});

export const Spinner = ()=>(

    <ActivityIndicator size="large" color= {color.grey} style={styles.spin}/>
);