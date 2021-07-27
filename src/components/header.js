import React from 'react';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

// Header

const styles = StyleSheet.create({
    header: {
        minHeight: 75,
      }
})
export const Header = ({ style, children,}) => (
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

export default Header;