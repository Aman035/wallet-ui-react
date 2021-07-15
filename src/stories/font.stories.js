import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import {Text} from 'react-native';
import '../components/font';

storiesOf('Fonts', module)
  .addDecorator(story => (
    <MainContent style={{ justifyContent: 'center' }}>{story()}</MainContent>
  ))
  .add('Inter Regular', () => renderFont('Inter Regular'))
  .add('Inter SemiBold', () => renderFont('Inter SemiBold'))
  .add('Inter Medium', () => renderFont('Inter Medium'));

const renderFont = fontFamily => (
  <Text style={{ fontFamily, fontSize: 24, lineHeight: 30 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  </Text>
);
