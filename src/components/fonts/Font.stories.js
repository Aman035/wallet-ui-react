import React from 'react';
import { storiesOf } from '@storybook/react';
import {View , Text} from 'react-native';
import './font';

storiesOf('Fonts', module)
  .addDecorator(story => (
    <View style={{alignItems : 'center'}}>
        {story()}
    </View>
    
  ))
  .add('Inter Regular', () => renderFont('Inter Regular'))
  .add('Inter SemiBold', () => renderFont('Inter SemiBold'))
  .add('Inter Medium', () => renderFont('Inter Medium'));

const renderFont = fontFamily => (
  <Text style={{ fontFamily, fontSize: 24, lineHeight: 30 }}>
    The quick brown fox jumps over the lazy dog.
  </Text>
);
