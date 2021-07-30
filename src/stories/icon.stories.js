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
import * as AllFilled from '../assets/icon/filled';
import * as AllOutlined from '../assets/icon/outline';
import { color } from '../components/style';
import {View , StyleSheet} from 'react-native';


const Filled = Object.values(AllFilled);
const Outline = Object.values(AllOutlined);

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    flexWrap : 'wrap'
  },

  container2 : {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : color.blue,
    width : '100vh'
  },
  icon : {
    height : 80,width : 80,
    alignItems : 'center',
    justifyContent : 'center'
  }
})

storiesOf('Icons', module)
  .addDecorator(story => (
      <MainContent style={styles.container}>
        {story()}
      </MainContent>
  ))
  .add('Filled Icons' , () => Filled.map((Each ,i)=><View key = {i} style={styles.icon}><Each/></View>))
  .add('Outlined Icons' , () => Outline.map((Each ,i)=><View key = {i} style={styles.icon}><Each/></View>))
  .add('Matress', () => <MatressIcon/>)
  .add('SingleBed ' ,() => <SingleBedIcon/>)
  .add('DoubleBed ' ,() => <DoubleBedIcon/>)
  .add('TripleBed ' ,() => <TripleBedIcon/>);