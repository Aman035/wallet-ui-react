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
    heading : {
        width : '44%',
        margin : 20,
        textAlign : 'center'
    }
})

const Loading = () =>{
    return(
        <View style={styles.head}>
            <LoadIcon style = {{height : 70}}/>
            <View style={styles.heading}>
                <H3Text>Restoring wallet from iCloud...</H3Text>
            </View>
        </View>
    )
}

export default Loading;