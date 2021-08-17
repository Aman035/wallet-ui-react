import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});

const Footer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
