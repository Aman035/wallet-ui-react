import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {PinSecret, PinPad} from '../components/pin';
import MainContent from '../components/main-content';

storiesOf('Pin', module)
  .addDecorator(story => (
      <MainContent style={{ justifyContent: 'center' }}>{story()}</MainContent>
  ))
  .add('Pin Pad', () => <PinPad onInput={action('input digit')} onBackspace={action('backspace')}/>)
  .add('Pin Secret' , () => <PinSecret pin="12"/>);
