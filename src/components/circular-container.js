import React from "react";
import { View, StyleSheet, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: "100%",
  },
});

const CircularContainer = ({ style, children }) => (
  <View style={[styles.container, style]}>{children}</View>
);

CircularContainer.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.node,
};

export default CircularContainer;
