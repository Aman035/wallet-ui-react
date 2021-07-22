import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import {View} from 'react-native';
import {H1Text , H2Text,  H3Text , H4Text , H5Text , H6Text} from '../components/text';

storiesOf('Text', module)
  .addDecorator(story => (
    //   <View>{story()}</View>
      <MainContent style={{ justifyContent: 'center' }}>{story()}</MainContent>
  ))
  .add('Heading 1', () => <H1Text>Heading 1</H1Text>)
  .add('Heading 2', () => <H2Text>Heading 2</H2Text>)
  .add('Heading 3', () => <H3Text>Heading 3</H3Text>)
  .add('Heading 4', () => <H4Text>Heading 4</H4Text>)
  .add('Heading 5', () => <H5Text>Heading 5</H5Text>)
  .add('Heading 6' ,() => <H6Text>Heading 6</H6Text>);