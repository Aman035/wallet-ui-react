import React from 'react';
import {View , StyleSheet} from 'react-native';
import LoadIcon from '../assets/icon/spinner';
import { H3Text } from '../components/text';
import MainContent  from '../components/main-content';
import { TouchableOpacityComponent } from 'react-native';
import { ActivityIndicator } from 'react-native';

const Loading = ({store}) =>{

    const styles = StyleSheet.create({
        container : {
            alignItems:'center',
            justifyContent:'center',
            backgroundColor : store.theme.color.fill
        },
        load : {
            padding :20
        },
        text : {
            color : store.theme.color.stroke
        }
    })

    return(
        <MainContent style ={styles.container}>
            <View style = {styles.load}>
                {/* <LoadIcon/> */}
                <ActivityIndicator size={60} color = {store.theme.color.neutral3}/>
            </View>
            <H3Text style={styles.text}>Restoring wallet</H3Text>
            <H3Text style={styles.text}>from icloud...</H3Text>
        </MainContent>
    )
}

export default Loading;