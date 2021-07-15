import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {View,Text} from 'react-native'
import {Button} from '../components/button';

storiesOf('Button', module)
  .addDecorator(story => (
    <View>{story()}</View>
  ))
  .add('Default Button', () => (
    <Button
      onPress={action('clicked')}
    //   children = {<Text>Next</Text>}
    />
  ))