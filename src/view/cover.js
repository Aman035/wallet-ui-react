import React from 'react';
import {Button} from '../components/button';
import { View ,StyleSheet} from 'react-native';
import MatressIcon from '../assets/img/Logo';
import { H5Text , H3Text } from '../components/text';
import { color } from '../components/style';

const styles = StyleSheet.create({
    main : {
        padding : 20,
        position : 'absolute',
        top : 0,
        bottom : 0,
        left : 0,
        right : 0
    },
    head : {
        alignItems : 'center', 
        marginTop : 50  , 
        marginBottom : 100
    },
    heading : {
        paddingVertical : 20
    },
    btnView : {
        marginTop : 'auto',
        marginBottom : 20
    },
    btn : {
        backgroundColor : color.blue
    }
})

export const Cover = ()=>{
    return(
        <View style={styles.main}>
            <View style={styles.head}>
                <MatressIcon/>
                <View> 
                    <H5Text>My Matress</H5Text>
                </View>
                <View style={styles.heading}>
                    <H3Text>Rest in peace.</H3Text>
                </View>
            </View>
            <View style={styles.btnView}>
                <Button style={styles.btn} children={'Make my bed'}/>
            </View>
        </View>
    )
}