import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import MatressIcon from '../assets/img/Logo';
import BackspaceIcon from '../assets/icon/backspace';
import SettingIcon from '../assets/icon/setting';
import CorrectIcon from '../assets/icon/correct';
import RightArrowIcon from '../assets/icon/arrow_right';
import SingleBedIcon from '../assets/icon/single_bed';
import DoubleBedIcon from '../assets/icon/double_bed';
import TripleBedIcon from '../assets/icon/triple_bed';
import { color } from '../components/style';
import {View , StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center',
  },

  container2 : {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : color.blue,
    width : '100vh'
  }
})

storiesOf('Icons', module)
  .addDecorator(story => (
      <MainContent style={styles.container}>{story()}</MainContent>
  ))
  .add('Matress', () => <MatressIcon/>)
  .add('Backspace' , () => <BackspaceIcon/>)
  .add('Setting' , () => <SettingIcon height={21} width={20}/>)
  .add('Correct ' ,() => <CorrectIcon/>)
  .add('Right Arrow' , ()=> (<MainContent style = {styles.container2}><RightArrowIcon/></MainContent>))
  .add('SingleBed ' ,() => <SingleBedIcon/>)
  .add('DoubleBed ' ,() => <DoubleBedIcon/>)
  .add('TripleBed ' ,() => <TripleBedIcon/>)