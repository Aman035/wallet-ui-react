import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {PinBubbles, PinKeyboard} from '../components/pin';
import MainContent from '../components/main-content';

storiesOf('Pin', module)
  .addDecorator(story => (
      <MainContent style={{ justifyContent: 'center' }}>{story()}</MainContent>
  ))
  .add('Pin Pad', () => <PinKeyboard onInput={action('input digit')} onBackspace={action('backspace')}/>)
  .add('Pin Bubbles' , () => <PinBubbles pin="1234"/>);
