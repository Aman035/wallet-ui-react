import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {View,Text} from 'react-native'
import {Button} from '../components/button';
import { color } from '../components/style';

storiesOf('Button', module)
  .addDecorator(story => (
    <View>{story()}</View>
  ))
  .add('Btn1', () => (<Button onPress={action('clicked')} style={{backgroundColor : color.orange}}/>))
  .add('Btn1 Disabled', () => (<Button onPress={action('clicked')} disabled style={{backgroundColor : color.orange}}/>))
  .add('Btn2', () => (<Button onPress={action('clicked')} style={{backgroundColor : color.blue}}/>))
  .add('Btn2 Disabled', () => (<Button onPress={action('clicked')} disabled style={{backgroundColor : color.blue}}/>));
  