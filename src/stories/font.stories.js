import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import { Text } from 'react-native';
import '../components/font';

storiesOf('Fonts', module)
  .addDecorator((story) => (
    <MainContent style={{ justifyContent: 'center', padding: 20 }}>
      {story()}
    </MainContent>
  ))
  .add('PaytoneOne Reglar', () => renderFont('PaytoneOne Regular'))
  .add('Inter Thin', () => renderFont('Inter Thin'))
  .add('Inter Regular', () => renderFont('Inter Regular'))
  .add('Inter Medium', () => renderFont('Inter Medium'))
  .add('Inter SemiBold', () => renderFont('Inter SemiBold'))
  .add('Inter Bold', () => renderFont('Inter Bold'))
 
const renderFont = (fontFamily) => (
  <Text
    style={{ fontFamily, fontSize: 28, lineHeight: 30, textAlign: 'center' }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut
  </Text>
);
