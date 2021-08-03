import React from 'react';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import { H3Text } from './text';
import PropTypes from 'prop-types';
import SettingsIcon from '../assets/icon/outline/Gear';
import CaretLeft from '../assets/icon/filled/CaretLeft';
import { IconButton } from './button';
// Header

const styles = StyleSheet.create({
    header: {
      minHeight: 75,
    },
    settingHeader : {
      padding :20,
      alignSelf : 'flex-end'
    },
    backHeader : {
      padding :20,
      alignSelf : 'flex-start'
    }
})
export const Header = ({ style, children}) => (
  <View
    style={[styles.header, style]}
  >
    {children}
  </View>
);

Header.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.node,
};

export const Setting_Header = () => (
  <Header style = {styles.settingHeader}><IconButton><SettingsIcon height={25} width={25}/></IconButton></Header>
)

export const Back_Header = () => (
  <Header style = {styles.backHeader}><H3Text><CaretLeft height={20} width={25}/>Back</H3Text></Header>
)
export default Header;