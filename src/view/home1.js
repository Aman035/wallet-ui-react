import React from 'react';
import {View ,StyleSheet} from 'react-native';
import MainContent from '../components/main-content';
import CorrectIcon from '../assets/icon/correct';
import {H6Text ,H3Text} from '../components/text';
import { color } from '../components/style';
import {Button2_Small ,IconButton} from '../components/button';
import RightArrowIcon from '../assets/icon/arrow_right';
import SettingsIcon from '../assets/icon/setting';
import Header from '../components/header';

const styles = StyleSheet.create({
    header : {
        padding :20,
        alignSelf : 'flex-end'
    },
    container : {
        justifyContent : 'center',
        alignItems : 'center',
        paddingBottom :20
    },
    heading1 : {
        marginTop : 40,
        textAlign : 'center',
        paddingHorizontal : 90
    },
    heading2 : {
        color : color.grey,
        marginVertical : 15,
        textAlign : 'center',
        paddingHorizontal : 50
    },
    button : {
        backgroundColor : color.bitcoin_blue,
        width : '50%',
        marginHorizontal : 'auto',
        marginTop : 25
    }
})

export const Home1 = () =>{
    return (
        <MainContent>
            <Header style = {styles.header}><IconButton><SettingsIcon height={25} width={25}/></IconButton></Header>
            <MainContent style = {styles.container}>
                <CorrectIcon/>
                <H6Text style = {styles.heading1}>You are all set to receive Bitcoin</H6Text>
                <H3Text style = {styles.heading2}>Ask others to send you Bitcoin, or top up the wallet yourself.</H3Text>
                <Button2_Small style = {styles.button}>View address   <RightArrowIcon/></Button2_Small>
            </MainContent>
        </MainContent>
    )
}

export default Home1;