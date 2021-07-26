import React from 'react';
import {View , StyleSheet} from 'react-native';
import LoadIcon from '../assets/icon/spinner';
import { H3Text } from '../components/text';
import MainContent  from '../components/main-content';
const styles = StyleSheet.create({
    head : {
        alignItems:'center',
        justifyContent:'center'
    },
    load : {
        padding :20
    }
})

const Loading = () =>{
    return(
        <MainContent style ={styles.head}>
            <View style = {styles.load}>
                <LoadIcon/>
            </View>
            <View>
                <H3Text>Restoring wallet</H3Text>
            </View>
            <View>
                <H3Text>from icloud...</H3Text>
            </View>
        </MainContent>
    )
}

export default Loading;