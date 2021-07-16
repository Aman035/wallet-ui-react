import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import MatressIcon from '../assets/img/Logo'

storiesOf('Icons', module)
  .addDecorator(story => (
      <MainContent style={{ justifyContent: 'center' }}>{story()}</MainContent>
  ))
  .add('Matress', () => <MatressIcon/>);
