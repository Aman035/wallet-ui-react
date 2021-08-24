import React from 'react';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import { H3Text } from './text';
import PropTypes from 'prop-types';
import SettingsIcon from '../assets/icon/outline/Gear';
import CaretLeft from '../assets/icon/filled/CaretLeft';
import Button , { IconButton } from './button';

// Header
const styles = StyleSheet.create({
  header: {
    minHeight: 75,
  },
  settingHeader: {
    alignSelf: 'flex-end',
  },
  backHeader: {
    alignSelf: 'flex-start',
  },
});

export const Header = ({ style, children }) => (
  <View style={[styles.header, style]}>{children}</View>
);

Header.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.node,
};

export const Setting_Header = ({ color, style }) => (
  <Header style={[styles.settingHeader, style]}>
    <IconButton>
      <SettingsIcon height={30} width={30} color={color} />
    </IconButton>
  </Header>
);

export const Back_Header = ({ color, style }) => (
  <Header style={[styles.backHeader, style]}>
    <Button>
      <H3Text style={{ color: color }}>
        <CaretLeft height={20} width={22} viewBox="0 0 20 20" color={color} />
        Back
      </H3Text>
    </Button>
  </Header>
);

export default Header;
