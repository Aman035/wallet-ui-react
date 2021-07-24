import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import Spinner from '../assets/icon/spinner';
storiesOf('Spinner', module)
  .addDecorator(story => (
      <MainContent style={{ justifyContent: 'center',padding : 10 }}>{story()}</MainContent>
  ))
  .add('Loader', () => <Spinner/>);