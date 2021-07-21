import React from 'react';
import { storiesOf } from '@storybook/react';
import {Cover} from '../view/cover';
import ChoosePin from '../view/choose_pin';

storiesOf('Screens', module)
.add('Cover', () => <Cover/>)
.add('Choose Pin', () => (<ChoosePin/>))