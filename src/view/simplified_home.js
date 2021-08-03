import  React from 'react';
import { View ,StyleSheet , Text} from 'react-native';
import SingleBedIcon from '../assets/icon/single_bed';
import { Setting_Header } from '../components/header';
import MainContent from '../components/main-content';
import {BalanceLabel , BalanceLabelNumeral ,SmallBalanceLabel} from '../components/label';
import { IconButton } from '../components/button';
import ArrowUpIcon from '../assets/icon/outline/ArrowUp';
import ArrowDownIcon from '../assets/icon/outline/ArrowDown';
import { H4Text } from '../components/text';

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems : 'center',
        paddingBottom :20
    }
})

const Simplified_Home = ()=>(
    <MainContent>
        <Setting_Header><Text>Back</Text></Setting_Header>
        <MainContent style = {styles.container}>
            <SingleBedIcon/>
            <BalanceLabel>
                <BalanceLabelNumeral>
                    1.6240 2785
                </BalanceLabelNumeral>
            </BalanceLabel>
            <SmallBalanceLabel>
                $41,328.9
            </SmallBalanceLabel>
            <View style={{flexDirection : 'row'}}>
            <IconButton style={{flex : 1}}><ArrowUpIcon/><H4Text>Send</H4Text></IconButton>
            <IconButton style={{flex : 1}}><ArrowDownIcon/><H4Text>Receive</H4Text></IconButton>
            </View>
        </MainContent>
    </MainContent>
)

export default Simplified_Home;