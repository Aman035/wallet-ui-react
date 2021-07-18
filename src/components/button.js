import React from 'react';
import {TouchableOpacity,StyleSheet,ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import { H3Text } from './text';
import { color } from './style';

const styles = StyleSheet.create({
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 60,
    minWidth: 60
  },
});

export const Button = ({ onPress, disabled, children, style }) => (
  <TouchableOpacity
    style={[{ opacity: disabled ? 0.5 : 1 }, styles.touchable, style]}
    disabled={disabled}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  style: ViewPropTypes.style,
};

const styles2 = StyleSheet.create({
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf : 'stretch',
    minHeight: 60,
    minWidth: 60,
    borderRadius : '5px'
  }
});

export const Button2 = ({ onPress, disabled, children='Btn Text',style}) => (
  <TouchableOpacity
    style={[{ opacity: disabled ? 0.5 : 1 }, styles2.touchable , style]}
    disabled={disabled}
    onPress={onPress}
  >
    <H3Text style={{color : color.white}}>{children}</H3Text>
  </TouchableOpacity>
);

Button2.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

export default Button;
