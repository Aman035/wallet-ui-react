import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import Colors from '../components/colors';

storiesOf('Colors', module)
.add('All Colors', () => <Colors/>);
//   .addDecorator(story => (
//       <MainContent>{story()}</MainContent>
//   ))
  