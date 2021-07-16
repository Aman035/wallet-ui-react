import React from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { H3Text } from './text';
import { color } from './style';

const styles = StyleSheet.create({
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 60,
    minWidth: 60,
    zIndex: 10,
    borderRadius : '5px'
  }
});

export const Button = ({ onPress, disabled, children='Btn Text',style}) => (
  <TouchableOpacity
    style={[{ opacity: disabled ? 0.5 : 1 }, styles.touchable , style]}
    disabled={disabled}
    onPress={onPress}
  >
    <H3Text style={{color : color.white}}>{children}</H3Text>
    
  </TouchableOpacity>
);

// Button.propTypes = {
//   onPress: PropTypes.func.isRequired,
//   disabled: PropTypes.bool,
//   children: PropTypes.node,
// };
