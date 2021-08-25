import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PinSecret, PinPad } from '../components/pin';
import MainContent from '../components/main-content';

storiesOf('Pin', module)
  .addDecorator((story) => (
    <MainContent style={{ justifyContent: 'center',alignItems : 'center' }}>{story()}</MainContent>
  ))
  .add('Pin Pad', () => (
    <PinPad onInput={action('input digit')} onBackspace={action('backspace')} stroke='#000' secondary='#777777'/>
  ))
  .add('Pin Secret', () => <PinSecret pin="12" />);
