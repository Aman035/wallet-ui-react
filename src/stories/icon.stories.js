import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import MatressIcon from '../assets/img/Logo';
import BackspaceIcon from '../assets/icon/backspace';
import SettingIcon from '../assets/icon/setting';
import CorrectIcon from '../assets/icon/correct';
import RightArrowIcon from '../assets/icon/arrow_right';
import { color } from '../components/style';
import {View , StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container : {
    position : 'absolute' , 
    top : 0 ,
    left : 0, 
    bottom : 0, 
    right : 0,
    justifyContent : 'center',
    alignItems : 'center',
  },

  container2 : {
    position : 'absolute' , 
    top : 0 ,
    left : 0, 
    bottom : 0, 
    right : 0,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : color.blue
  }
})

storiesOf('Icons', module)
  .addDecorator(story => (
      <View style={styles.container}>{story()}</View>
  ))
  .add('Matress', () => <MatressIcon/>)
  .add('Backspace' , () => <BackspaceIcon/>)
  .add('Setting' , () => <SettingIcon height={21} width={20}/>)
  .add('Correct ' ,() => <CorrectIcon/>)
  .add('Right Arrow' , ()=> (<View style = {styles.container2}><RightArrowIcon/></View>));