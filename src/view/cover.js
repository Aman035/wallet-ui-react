import React from 'react';
import {Button2} from '../components/button';
import { View ,StyleSheet} from 'react-native';
import MatressIcon from '../assets/img/Logo';
import { H5Text , H3Text } from '../components/text';
import { color } from '../components/style';
import MainContent from '../components/main-content';

const styles = StyleSheet.create({
    head : {
        alignItems : 'center', 
        marginTop : 50  , 
        padding : 20
    },
    heading : {
        paddingVertical : 20
    },
    btn : {
        backgroundColor : color.bitcoin_blue,
        marginTop : 'auto',
        marginBottom : 20
    }
})

export const Cover = ()=>{
    return(
        <MainContent style={styles.head}>
                <MatressIcon/>
                <View> 
                    <H5Text>My Matress</H5Text>
                </View>
                <View style={styles.heading}>
                    <H3Text>Rest in peace.</H3Text>
                </View>
            <Button2 style={styles.btn} children={'Make my bed'} onPress = {()=>{}}/>
        </MainContent>
    )
}