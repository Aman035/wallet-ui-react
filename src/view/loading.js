import React from 'react';
import {View , StyleSheet} from 'react-native';
import LoadIcon from '../assets/icon/spinner';
import { H5Text , H3Text } from '../components/text';
import { color } from '../components/style';
import AuthAction from '../actions/auth';

const styles = StyleSheet.create({
    head : {
        position : 'absolute',
        top : 0,
        bottom : 0,
        left : 0,
        right : 0,
        alignItems:'center',
        justifyContent:'center'
    },
    load : {
        padding :20
    }
})

const Loading = () =>{
    return(
        <View style={styles.head}>
            <View style = {styles.load}>
                <LoadIcon/>
            </View>
            <View>
                <H3Text>Restoring wallet</H3Text>
            </View>
            <View>
                <H3Text>from icloud...</H3Text>
            </View>
        </View>
    )
}

export default Loading;