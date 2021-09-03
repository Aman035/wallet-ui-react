import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button2, Button2_Small, IconButton } from '../components/button';
import { primary } from '../components/themeColor';
import Button from '../components/button';
import MainContent from '../components/main-content';

storiesOf('Button', module)
  .addDecorator((story) => (
    <MainContent style={{ justifyContent: 'center', padding: 20 }}>
      {story()}
    </MainContent>
  ))
  .add('Default Btn', () => (
    <Button
      onPress={action('clicked')}
      style={{
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: '1px',
      }}
    />
  ))
  .add('Btn1', () => (
    <Button2
      onPress={action('clicked')}
      style={{ backgroundColor: primary.bitcoin_orange }}
    />
  ))
  .add('Btn1 Disabled', () => (
    <Button2
      onPress={action('clicked')}
      disabled
      style={{ backgroundColor: primary.bitcoin_orange }}
    />
  ))
  .add('Btn1 Small', () => (
    <Button2_Small
      onPress={action('clicked')}
      style={{ backgroundColor: primary.bitcoin_orange }}
    />
  ))
  .add('Btn2', () => (
    <Button2
      onPress={action('clicked')}
      style={{ backgroundColor: primary.bitcoin_blue }}
    />
  ))
  .add('Btn2 Disabled', () => (
    <Button2
      onPress={action('clicked')}
      disabled
      style={{ backgroundColor: primary.bitcoin_blue }}
    />
  ))
  .add('Btn2 Small', () => (
    <Button2_Small
      onPress={action('clicked')}
      style={{ backgroundColor: primary.bitcoin_blue }}
    />
  ));
