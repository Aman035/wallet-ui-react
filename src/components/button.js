import React from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 60,
    backgroundColor : '#F7931A',
    minWidth: 60,
    zIndex: 10,
  },
});

export const Button = ({ onPress, disabled, children}) => (
  <TouchableOpacity
    style={[{ opacity: disabled ? 0.5 : 1 }, styles.touchable]}
    disabled={disabled}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

// Button.propTypes = {
//   onPress: PropTypes.func.isRequired,
//   disabled: PropTypes.bool,
//   children: PropTypes.node,
// };
