import React from 'react';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    width: '100vw',
  },
  dark : {
    backgroundColor : '#000'
  }
});

const Container = ({ children, style , theme = 'light' }) => (
  <View 
    style={[styles.container, style , theme==='dark'? styles.dark : null ]}>
      {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};

export default Container;
